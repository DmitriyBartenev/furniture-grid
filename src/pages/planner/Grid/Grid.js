import { useEffect, useRef, useState } from 'react';


import './grid.scss';   

const Grid = () => {
    const canvasRef = useRef(null);
    //let contextRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    // eslint-disable-next-line
    const [shapes, setShapes] = useState([
        {x:200, y:50, width: 200, height:200, color:'red'},
        {x:100, y:400, width: 100, height:80, color:'blue'},
        {x:200, y: 300, width: 50, height:50, color:'white'}])
    const [offsetX, setOffsetX] = useState();
    const [offsetY, setOffsetY] = useState();
    const [startX, setStartX] = useState();
    const [startY, setStartY] = useState();
    const [mouseX, setMouseX] = useState();
    const [mouseY, setMouseY] = useState();
    const [currentShapeIndex, setCurrentShapeIndex] = useState(null);

    useEffect(()=>{

        let canvas = canvasRef.current;
        let context = canvas.getContext('2d')

        canvas.width = 650;
        canvas.height = 700;

        let canvas_width = canvas.width;
        let canvas_height = canvas.height;


        let get_offset = function(){
            let canvas_offsets = canvas.getBoundingClientRect();
            setOffsetX(canvas_offsets.left);
            setOffsetY(canvas_offsets.top);
        }

        get_offset();

        window.onscroll = function(){get_offset();}
        window.onresize = function(){get_offset();}
        canvas.onresize = function(){get_offset();}

        let is_mouse_in_shape = function(x, y, shape){
            let shape_left = shape.x;
            let shape_right = shape.x + shape.width;
            let shape_top = shape.y;
            let shape_bottom = shape.y + shape.height;

            if(x > shape_left && x < shape_right && y > shape_top && y < shape_bottom){
                return true;
            }
            return false;
        }
        
        let mouse_down = function(event){
            event.preventDefault();

            setStartX(parseInt(event.clientX - offsetX))
            setStartY(parseInt(event.clientY - offsetY))

            let index = 0;

            for(let shape of shapes){
                if(is_mouse_in_shape(startX, startY, shape)){
                    setCurrentShapeIndex(index);
                    setIsDragging(true);
                    return;
                }
                index++;
            }
        }

        let mouse_up = function(event){
            if(!isDragging){
                return;
            }
            event.preventDefault();
            setIsDragging(false);
        }
        
        let mouse_out = function(event){
            if(!isDragging){
                return;
            }
            event.preventDefault();
            setIsDragging(false);
        }

        var mouse_move = function(event){
            if(!isDragging){
                return;
            }else{
                event.preventDefault();

                setMouseX(parseInt(event.clientX - offsetX));
                setMouseY(parseInt(event.clientY - offsetY));
                
                let dx = mouseX - startX;
                let dy = mouseY - startY;
                

                setStartX(parseInt(event.clientX - offsetX))
                setStartY(parseInt(event.clientY - offsetY))
                
                let index = 0;

                for(let shape of shapes){
                    if(is_mouse_in_shape(startX, startY, shape)){
                        setCurrentShapeIndex(index);
                        return;
                    }
                    index++;
                }
            
                let current_shape = shapes[currentShapeIndex];

                current_shape.x += dx;
                current_shape.y += dy;

                draw_shapes();
                
                setStartX(mouseX);
                setStartY(mouseY);
            }
        }

        /* canvas.onmousedown = mouse_down;
        canvas.onmouseup = mouse_up;
        canvas.onmouseout = mouse_out;
        canvas.onmousemove = mouse_move; */

        canvas.addEventListener('mousedown', mouse_down);
        canvas.addEventListener('mouseup', mouse_up);
        canvas.addEventListener('mouseout', mouse_out);
        canvas.addEventListener('mousemove', mouse_move);

        const cleanup = () => {
            canvas.removeEventListener('mousedown', mouse_down);
            canvas.removeEventListener('mouseup', mouse_up);
            canvas.removeEventListener('mouseout', mouse_out);
            canvas.removeEventListener('mousemove', mouse_move);
        }

        let draw_shapes = function(){
            context.clearRect(0,0, canvas_width, canvas_height);
            for(let shape of shapes){
                context.fillStyle = shape.color;
                context.fillRect(shape.x, shape.y, shape.width, shape.height)
            }
        }
        
        draw_shapes()

        return cleanup;

        /* context.strokeStyle = 'white';
        context.lineWidth = 0.1;    
        contextRef.current = context;

        for(let i = 0; i <= 700; i += 30){
            context.moveTo(i,0);
            context.lineTo(i, 700);

            context.moveTo(0, i);
            context.lineTo(650, i);

            context.stroke()
        } */

    }, [isDragging, offsetX, offsetY, startX, startY, shapes, currentShapeIndex, mouseX, mouseY]);

    return(
        <div className = 'grid'>
            <h3>Карта заведения</h3>
            <canvas 
                className='grid__layout'
                ref = {canvasRef}
                >
            </canvas>
        </div>
    )
}

export default Grid;
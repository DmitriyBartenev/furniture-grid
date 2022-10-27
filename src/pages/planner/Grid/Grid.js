import { useEffect, useRef, useState } from 'react';


import './grid.scss';   

const Grid = () => {
    let canvasRef = useRef(null);
    let contextRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(()=>{

        let canvas = canvasRef.current;
        let context = canvas.getContext('2d')

        canvas.width = 650;
        canvas.height = 700;

        let canvas_width = canvas.width;
        let canvas_height = canvas.height;

        let offset_x;
        let offset_y;

        let get_offset = function(){
            let canvas_offsets = canvas.getBoundingClientRect();
            offset_x = canvas_offsets.left;
            offset_y = canvas_offsets.top;
        }

        get_offset();

        window.onscroll = function(){get_offset();}
        window.onresize = function(){get_offset();}
        canvas.onresize = function(){get_offset();}

        let shapes = [];
        let current_shape_index = null;
        let startX;
        let startY;

        shapes.push({x:200, y:50, width: 200, height:200, color:'red'})
        shapes.push({x:100, y:400, width: 100, height:80, color:'blue'})

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

            startX = parseInt(event.clientX - offset_x);
            startY = parseInt(event.clientY - offset_y);

            let index = 0;

            for(let shape of shapes){
                if(is_mouse_in_shape(startX, startY, shape)){
                    current_shape_index = index;
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
                
                let mouseX = parseInt(event.clientX - offset_x);
                let mouseY = parseInt(event.clientY - offset_y);
                
                let dx = mouseX - startX;
                let dy = mouseY - startY;
                
                startX = parseInt(event.clientX - offset_x);
                startY = parseInt(event.clientY - offset_y);
                
                let index = 0;

                for(let shape of shapes){
                    if(is_mouse_in_shape(startX, startY, shape)){
                        current_shape_index = index;
                        return;
                    }
                    index++;
                }
            
                let current_shape = shapes[current_shape_index];

                current_shape.x += dx;
                current_shape.y += dy;

                draw_shapes();
                
                startX = mouseX;
                startY = mouseY;
            }
        }

        canvas.onmousedown = mouse_down;
        canvas.onmouseup = mouse_up;
        canvas.onmouseout = mouse_out;
        canvas.onmousemove = mouse_move;

        var draw_shapes = function(){
            context.clearRect(0,0, canvas_width, canvas_height);
            for(let shape of shapes){
                context.fillStyle = shape.color;
                context.fillRect(shape.x, shape.y, shape.width, shape.height)
            }
        }
        
        draw_shapes()

        context.strokeStyle = 'white';
        context.lineWidth = 0.1;    
        contextRef.current = context;

        for(let i = 0; i <= 700; i += 30){
            context.moveTo(i,0);
            context.lineTo(i, 700);

            context.moveTo(0, i);
            context.lineTo(650, i);

            context.stroke()
        }

    }, [isDragging]);

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
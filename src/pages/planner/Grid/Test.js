import { useHttp } from '../../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { createSelector } from '@reduxjs/toolkit';

import { fetchFurniture } from '../../../redux/actions';

import './test.scss';
import FurnitureListItem from '../FurnitureList/Furniture/FurnitureListItem/FurnitureListItem';
import GridItem from './GridItem';

const Test = () => {

    const fur = useSelector(state => state.furniture.furniture);

    const [furni, setFurni] = useState(fur);

    console.log(furni)

    const handleOnDragEnd = (result) => {
        const items = Array.from(fur);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        
    }

    return(
        <div className = 'grid'>
            <h3>Карта заведения</h3>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='furnitures'>
                    {(provided)=>(
                        <ul className='grid__layout' {...provided.droppableProps} ref={provided.innerRef}>
                            {fur.map(({id, url, alt}, index)=>{
                                return(
                                    <Draggable key={id} draggableId={url} index={index}>
                                        {(provided)=> (
                                            <li className="table" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <img 
                                                    src={url} 
                                                    alt={alt} 
                                                    width='50px' 
                                                    height='50px'
                                                    id={id}
                                                    />
                                            </li>  
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Test
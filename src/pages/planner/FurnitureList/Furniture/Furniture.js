import { useHttp } from '../../../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { createSelector } from '@reduxjs/toolkit';

import { fetchFurniture } from '../../../../redux/actions';
import Spinner from '../../../../components/spinner/Spinner';

import './furniture.scss'
import FurnitureListItem from './FurnitureListItem/FurnitureListItem';

const Furniture = () => {
    
    const filteredFurnitureSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.furniture.furniture,
        (filter, furniture) => {
            if(filter === 'all'){
                return furniture
            }else{
                return furniture.filter(item => item.filter === filter);
            }
        }
        );
        
    const filteredFurniture = useSelector(filteredFurnitureSelector);
    const furnitureLoadingStatus = useSelector(state => state.furniture.furnitureLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFurniture(request))
        // eslint-disable-next-line
    }, [])

    if(furnitureLoadingStatus === 'loading'){
        return <Spinner/>
    }else if(furnitureLoadingStatus === 'error'){
        return <h5>Ошибка загрузки</h5>
    }

    const renderFurnitureList = (arr) => {
        if(arr.length === 0){
            return(
                <h5 className='error'>Не удалось загрузить мебель</h5>
            )
        }

        return arr.map(({id, ...props}) => {
            return(
                <FurnitureListItem {...props} key={id}/>
            )
        })
    }

    const elements = renderFurnitureList(filteredFurniture);


    return(
        <ul className="tables">
            {elements}
        </ul>
    )
}

export default Furniture;
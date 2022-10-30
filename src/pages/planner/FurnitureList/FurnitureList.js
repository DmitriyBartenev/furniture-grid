import { useHttp } from '../../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { fetchFurniture } from '../../../redux/actions';
import Spinner from '../../../components/spinner/Spinner';

import { FurnitureLinksList, FurnitureTablesList } from "../../../data/FurnitureData";
import React, { useRef } from "react";

import './furnitureList.scss'

const FurnitureList = () => {

    const {request} = useHttp();

    

    const tableRef = useRef(null);

    const getElement = (e) => {
        const item = e.target;
        console.log(item);
    }

    return(
        <div className="list">
            <div className="list__content">
                <ul>
                    {FurnitureLinksList.map(item => {
                        return(
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
                <div className="tables">
                    {FurnitureTablesList.map(item => {
                        return(
                            <div className="table" key={item.id}>
                                <img 
                                    src={require('../../../assets/tables/' + item.title + '.png')} 
                                    alt={item.title} 
                                    width='50px' 
                                    height='50px'
                                    ref={tableRef}
                                    onClick={getElement}
                                    id={item.id}
                                    />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FurnitureList;
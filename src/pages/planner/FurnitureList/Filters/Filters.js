import { useHttp } from '../../../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFilters, activeFilterChanged } from '../../../../redux/actions';
import Spinner from '../../../../components/spinner/Spinner';

import './filters.scss';

const Filters = () => {

    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchFilters(request));

        // eslint-disable-next-line
    },[])

    if(filtersLoadingStatus === 'loading'){
        return <Spinner/>
    }else if(filtersLoadingStatus === 'error'){
        return <h5>Не удалось загрузить фильтры</h5>
    }

    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5 className='error'>Фильтры не найдены</h5>
        }
        return arr.map(({id, name, label}) => {
            return <li 
                    className='filter'
                    id={id}
                    key={id}
                    onClick={()=> dispatch(activeFilterChanged(name))}>{label}</li>
        })
    }

    const elements = renderFilters(filters)

    return( 
        <ul className='filters'>
            {elements}
        </ul>
    )
}

export default Filters;
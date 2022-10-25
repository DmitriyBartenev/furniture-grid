import { FurnitureTablesList } from '../../../../data/FurnitureData';

import './tablesList.scss';

const TablesList = () => {

    return(
        <div className="tables">
            {FurnitureTablesList.map(item => {
                return(
                    <div className="table">
                        <img src={require('../../../assets/' + item.title + '.png')} alt={item.title} width='50px' height='50px'/>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TablesList;
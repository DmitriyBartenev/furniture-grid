import { FurnitureLinksList, FurnitureTablesList } from "../../../data/FurnitureData";


import './furnitureList.scss'

const FurnitureList = () => {
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
                                <img src={require('../../../assets/' + item.title + '.png')} alt={item.title} width='50px' height='50px'/>
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
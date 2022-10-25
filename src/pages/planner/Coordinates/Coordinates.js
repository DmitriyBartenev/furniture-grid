import { FurnitureCoordinates } from "../../../data/FurnitureData";

import '../Coordinates/coordinates.scss';

const Coordinates = () => {

    return(
        <div className="coordinates">
            <h3>Параметры элемента</h3>
            <div className="coordinates__wrapper">
                <ul>
                    {FurnitureCoordinates.map(item => {
                        return(
                            <li>
                                <p>{item.title}</p>
                                <input type={item.type} value={item.value}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Coordinates;
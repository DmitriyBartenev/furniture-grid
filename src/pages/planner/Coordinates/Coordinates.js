import { useState } from "react";
import { FurnitureCoordinates } from "../../../data/FurnitureData";

import '../Coordinates/coordinates.scss';

const Coordinates = () => {

    const [value, setValue] = useState('');

    

    return(
        <div className="coordinates">
            <h3>Параметры элемента</h3>
            <div className="coordinates__wrapper">
                <ul>
                    {FurnitureCoordinates.map(item => {
                        return(
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <input 
                                    type={item.type} 
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Coordinates;
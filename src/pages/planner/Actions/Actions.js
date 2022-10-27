import { FurnitureActions } from "../../../data/FurnitureData";

import './actions.scss'

const Actions = () => {



    return(
        <div className="buttons">
            <ul className="buttons__list">
                {FurnitureActions.map(item => {
                    return(
                        <li key={item.id}>
                            <button>{item.title}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Actions;
import { FurnitureActions } from "../../../data/FurnitureData";


const Actions = () => {

    return(
        <div>
            <ul>
                {FurnitureActions.map(item => {
                    return(
                        <li>
                            <button>{item.title}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Actions;
import FurnitureList from "./FurnitureList/FurnitureList";
import Actions from "./Actions/Actions";
import Coordinates from "./Coordinates/Coordinates";

import './planner.scss';
import Test from "./Grid/Test";

const Planner = () => {

    

    return(
        <div className="planner">
            <div>
                <FurnitureList/>
                <Coordinates/>
                <Actions/>
            </div>
            <div>
                <Test/>
            </div>
        </div>
    )
}

export default Planner;
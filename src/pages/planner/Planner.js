import FurnitureList from "./FurnitureList/FurnitureList";
import Actions from "./Actions/Actions";
import Coordinates from "./Coordinates/Coordinates";
import Grid from "./Grid/Grid";

import './planner.scss';

const Planner = () => {

    

    return(
        <div className="planner">
            <div>
                <FurnitureList/>
                <Coordinates/>
                <Actions/>
            </div>
            <div>
                <Grid/>
            </div>
        </div>
    )
}

export default Planner;
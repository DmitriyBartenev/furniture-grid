import Filters from "./Filters/Filters";
import Furniture from "./Furniture/Furniture";
    
import './furnitureList.scss';

const FurnitureList = () => {
    return(
        <div className="list">
            <div className="list__content">
                <Filters/>
                <Furniture/>
            </div>
        </div>
        
    )
}

export default FurnitureList;
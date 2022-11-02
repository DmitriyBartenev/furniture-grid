
import './furnitureListItem.scss';

const FurnitureListItem = ({name, alt, id, url}) => {

    return(
        <li className="table" key={id}>
            <img 
                src={url} 
                alt={alt} 
                width='50px' 
                height='50px'
                id={id}
                />
            <p>{name}</p>
        </li>
    )
}

export default FurnitureListItem;
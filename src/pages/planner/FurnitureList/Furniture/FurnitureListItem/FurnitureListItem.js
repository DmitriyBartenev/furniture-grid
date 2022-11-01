
import './furnitureListItem.scss';

const FurnitureListItem = ({name, alt, id}) => {

    return(
        <li className="table" key={id}>
            <img 
                src={require('../../../../../assets/tables/' + alt + '.svg')} 
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
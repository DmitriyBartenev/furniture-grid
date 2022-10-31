

const FurnitureListItem = ({name, title, id}) => {
    return(
        <div className="table" key={id}>
            <img 
                src={require('../../../../../assets/tables/' + title + '.png')} 
                alt={title} 
                width='50px' 
                height='50px'
                id={id}
                />
            <p>{name}</p>
        </div>
    )
}

export default FurnitureListItem;
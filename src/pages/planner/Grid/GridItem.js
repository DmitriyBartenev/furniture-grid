


const GridItem = ({url, alt, id}) => {
    return(
        <li className="table" key={id}>
            <img 
                src={url} 
                alt={alt} 
                width='50px' 
                height='50px'
                id={id}
                />
        </li>
    )
}

export default GridItem;
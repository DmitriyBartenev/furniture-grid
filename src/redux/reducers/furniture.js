
const initialState = {
    furniture:[],
    furnitureLoadingStatus:'idle'
}

const furniture = (state = initialState, action) => {
    switch(action.type){
        case 'FURNITURE_FETCHING':
            return{
                ...state,
                furnitureLoadingStatus:'loading'
            }
        case 'FURNITURE_FETCHED':
            return{
                ...state,
                furniture: action.payload,
                furnitureLoadingStatus:'idle'
            }
        case 'FURNITURE_FETCHING_ERROR':
            return{
                ...state,
                furnitureLoadingStatus:'error'
            }
        default: return state;
    }
}

export default furniture;


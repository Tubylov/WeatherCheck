const initialState = {
    city: "",
    cityCheck: false
}

export default function getCity(state = initialState, action){
    console.log(action);
    switch(action.type){
        
        case "SET_CITY":
            return { ...state, city: action.payload };
            break;

        case "SET_CITY_CHECK":
            return { ...state, cityCheck: action.payload };
            break;

        default:
            return state;
            break;
    }
}
import{
    SET_LOADING,
    FARM_ERROR,
    FARM_TYPE,
    FARM_STATE,
    FARM_LGA,
    GET_FARMS,
    ADD_FARM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_FARM
} from '../types'

const farmerReducer = (state, action) => {
    switch(action.type){

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case FARM_TYPE:
            return {
                ...state,
                farmTypes: action.payload
            }
        case FARM_STATE:
            return {
                ...state,
                farmStates: action.payload
            }
        case FARM_LGA:
            return {
                ...state,
                farmLgas: action.payload
            }
        case GET_FARMS:
            return {
                ...state,
                farms: action.payload
            }
        case ADD_FARM:
            return {
                farms: [action.payload,...state.farms]
            }
        case UPDATE_FARM:
            return {
                ...state,
                farms: state.farms.map(farm => farm.id === action.payload.id ? action.payload : farm)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FARM_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default farmerReducer
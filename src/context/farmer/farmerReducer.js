import{
    SET_LOADING,
    FARM_ERROR,
    FARM_TYPE,
    FARM_STATE,
    FARM_LGA,
    GET_FARMS,
    EQUIPMENT_LIST_SUCCESS,
    EQUIPMENT_LIST_FAIL,
    EQUIPMENT_CREATE_SUCCESS,
    EQUIPMENT_CREATE_FAIL,
    EQUIPMENT_SERVICE_LIST_SUCCESS,
    EQUIPMENT_REQUEST_LIST_SUCCESS,
    USER_LOGOUT_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS,
    ADD_FARM,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_FARM,
    DELETE_FARM,
    UPDATE_PROFILE
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
        case UPDATE_PROFILE:
            return {
                ...state,
                userInfo: state.farms.map(user => user.id === action.payload.id ? action.payload : user)
            }
        case DELETE_FARM:
            return {
                ...state,
                farms: state.farms.filter(farm => farm._id !== action.payload) 
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
        case EQUIPMENT_LIST_FAIL:
        case EQUIPMENT_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case EQUIPMENT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }

        case EQUIPMENT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                equipments: action.payload
            }

        case EQUIPMENT_SERVICE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                equipmentServices: action.payload
            }

        case EQUIPMENT_REQUEST_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                equipmentRequests: action.payload
            }
        case USER_LOGOUT_SUCCESS:
            return {}
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        default:
            return state;
    }
}

export default farmerReducer
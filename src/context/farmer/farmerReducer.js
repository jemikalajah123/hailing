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
    EQUIPMENT_REQUEST_LIST_SUCCESS
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
                equipments: action.payload
            }

        case EQUIPMENT_SERVICE_LIST_SUCCESS:
            return {
                ...state,
                equipmentServices: action.payload
            }

        case EQUIPMENT_REQUEST_LIST_SUCCESS:
            return {
                ...state,
                equipmentRequests: action.payload
            }
        default:
            return state;
    }
}

export default farmerReducer
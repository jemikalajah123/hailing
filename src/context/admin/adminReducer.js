import{
    SET_LOADING,
} from '../types'

const adminReducer = (state, action) => {
    switch(action.type){
        
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default adminReducer
import React, { useReducer } from 'react'
import farmerContext from './farmerContext'
import farmerReducer from './farmerReducer'
import{
    SET_LOADING,
} from '../types'


const FarmerState = props => {
    const initialState = {
        loading: false,
        longitude: null,
        latitude: null
    }

    const [ state, dispatch ] = useReducer(farmerReducer, initialState);
    
    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <farmerContext.Provider
        value={{
            loading: state.loading,
            setLoading
        }}>
            {props.children}
    </farmerContext.Provider>
}

export default FarmerState;
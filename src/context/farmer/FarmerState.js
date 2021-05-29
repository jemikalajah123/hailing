import React, { useReducer } from 'react'
import farmerContext from './farmerContext'
import farmerReducer from './farmerReducer'
import axios from 'axios'
import{
    SET_LOADING,
    FARM_ERROR,
    FARM_TYPE,
    FARM_STATE,
    FARM_LGA
} from '../types'


const FarmerState = props => {
    const initialState = {
        loading: false,
        farmTypes: null,
        farmStates: null,
        farmLgas: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(farmerReducer, initialState);

    //Get Farm Type
    const getFarmType = async () => {
        try {
            const res = await axios.get('https://hailing-backend.herokuapp.com/user/farmer/get_farm_type')
            dispatch({
                type: FARM_TYPE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: FARM_ERROR,
                payload: error
            })
        }
    }

    //Get States
    const getStates = async () => {
        try {
            const res = await axios.get('https://hailing-backend.herokuapp.com/generic/get_states')
            dispatch({
                type: FARM_STATE,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: FARM_ERROR,
                payload: error
            })
        }
    }
    //Get LGA'S
    const getLga = async state_id => {
        try {
            const res = await axios.get(`https://hailing-backend.herokuapp.com/generic/get_lga/${state_id}`)
            dispatch({
                type: FARM_LGA,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: FARM_ERROR,
                payload: error
            })
        }
    }
    
    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <farmerContext.Provider
        value={{
            loading: state.loading,
            error: state.error,
            farmTypes: state.farmTypes,
            farmStates: state.farmStates,
            farmLgas: state.farmLgas,
            setLoading,
            getFarmType,
            getStates,
            getLga
        }}>
            {props.children}
    </farmerContext.Provider>
}

export default FarmerState;
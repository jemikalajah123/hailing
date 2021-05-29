import React, { useReducer } from 'react'
import farmerContext from './farmerContext'
import farmerReducer from './farmerReducer'
import axios from 'axios'
import{
    SET_LOADING,
    FARM_ERROR,
    FARM_TYPE,
    FARM_STATE,
    FARM_LGA,
    GET_FARMS,
    ADD_FARM
} from '../types'


const FarmerState = props => {
    const initialState = {
        loading: false,
        farmTypes: null,
        farmStates: null,
        farmLgas: null,
        farms: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(farmerReducer, initialState);

    //Token
    var token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGQ1MTNkM2QiLCJyb2xlIjoiNGQ1MTNkM2QiLCJpYXQiOjE2MjIwMDIwNDR9.fdlBef1fihWEaWEWflD1gN3luUHITeKvtGiFCkQIO8s";

    //Set up axios headers
    const authAxios = axios.create({
        headers: {
            authorization: token
        }
    })

    //Add Farm
    const addFarm = async farm => {
        
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await authAxios.post('https://hailing-backend.herokuapp.com/user/farmer/add_farm', farm, config);
            dispatch({ 
                type: ADD_FARM, 
                payload: res.data.data
               });
        } catch (error) {
            dispatch({ 
                type: FARM_ERROR ,
                payload: error
               })
        }
    }

    //Get Farm Type
    const getFarmType = async () => {
        try {
            const res = await authAxios.get('https://hailing-backend.herokuapp.com/user/farmer/get_farm_type')
            dispatch({
                type: FARM_TYPE,
                payload: res.data.data
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

    //Get Farms
    const getFarms = async () => {
        try {
            const res = await authAxios.get('https://hailing-backend.herokuapp.com/user/farmer/get_farms')
            dispatch({
                type: GET_FARMS,
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
            farms: state.farms,
            setLoading,
            getFarmType,
            getStates,
            getLga,
            getFarms,
            addFarm
        }}>
            {props.children}
    </farmerContext.Provider>
}

export default FarmerState;
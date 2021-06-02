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
    DELETE_FARM
} from '../types'


const FarmerState = props => {
    const initialState = {
        loading: false,
        farmTypes: null,
        farmStates: null,
        farmLgas: null,
        equipments: null,
        equipmentServices: null,
        equipmentRequests: null,
        userInfo: null,
        farms: null,
        current: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(farmerReducer, initialState);
    const url = 'https://hailing-backend.herokuapp.com/';

    //Token
    var token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGQ1MTNkM2QiLCJyb2xlIjoiNGQ1MTNkM2QiLCJpYXQiOjE2MjIwMDIwNDR9.fdlBef1fihWEaWEWflD1gN3luUHITeKvtGiFCkQIO8s";

    const baseUrl = "https://hailing-backend.herokuapp.com";

    //Set up axios headers
    const authAxios = axios.create({
        headers: {
            authorization: token
        }
    })

    const register = (name, email, password) => async () => {
        try {
            const res = await authAxios.post(
                url + 'auth/signup',
                { 'name': name, 'email': email, 'password': password },
            )
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res.data.data
            })
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data.data
            })
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))

        } catch (error) {
            dispatch({
                type:FARM_ERROR,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
        }
    }

    const login = async (email, password) => {
        try {
            const res = await authAxios.post(
                url + 'auth/user/login',
                { email, password },
            )
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data.data
            })

            localStorage.setItem('userInfo', JSON.stringify(res.data.data))

        } catch (error) {
            dispatch({
                type:FARM_ERROR,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
        }
    }

    const logout = () => (dispatch) => {
        localStorage.removeItem('userInfo')
        dispatch({ type: USER_LOGOUT_SUCCESS })
    }



    //Get Farm Equipments
    const getEquipments = async id => {
        try {
            const res = await authAxios.get(url + `user/farmer/get_equipment_service_equipments/${id}`)
            dispatch({
                type: EQUIPMENT_LIST_SUCCESS,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: EQUIPMENT_LIST_FAIL,
                payload: error
            })
        }
    }

    //Get Farm Equipment Service
    const getEquipmentServices = async () => {
        try {
            const res = await authAxios.get(url + 'user/farmer/get_equipment_service_settings')
            dispatch({
                type: EQUIPMENT_SERVICE_LIST_SUCCESS,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: EQUIPMENT_LIST_FAIL,
                payload: error
            })
        }
    }

    //Get Farm Equipment Requests
    const getEquipmentRequests = async () => {
        try {
            const res = await authAxios.get(url + 'user/farmer/equipment_requests')
            console.log(res);
            dispatch({
                type: EQUIPMENT_REQUEST_LIST_SUCCESS,
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: EQUIPMENT_LIST_FAIL,
                payload: error
            })
        }
    }

    const createEquipmentRequest = async () => {
        try {
            const res = await authAxios.post(url + 'user/farmer/request_equipment')
            dispatch({
                type: EQUIPMENT_CREATE_SUCCESS,
            })
        } catch (error) {
            dispatch({
                type: EQUIPMENT_CREATE_FAIL,
                payload: error
            })
        }
    }
    //Add Farm
    const addFarm = async farm => {
        
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await authAxios.post(`${baseUrl}/user/farmer/add_farm`, farm, config);
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
    //Update Farm
    const updateFarm = async farm => {
        
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await authAxios.put(`${baseUrl}/user/farmer/edit_farm/${farm.id}`, farm, config);
            console.log("from state "+res.data.data)
            dispatch({ 
                type: UPDATE_FARM, 
                payload: res.data.data
               });
        } catch (error) {
            dispatch({ 
                type: FARM_ERROR ,
                payload: error
               })
        }
    }

    //Delete Farm
    const deleteFarm = async id => {
        try {
            await authAxios.delete(`${baseUrl}/user/farmer/remove_farm/${id}`);
            dispatch({
                 type: DELETE_FARM,
                  payload: id 
                })
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
            const res = await authAxios.get(`${baseUrl}/user/farmer/get_farm_type`)
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
            const res = await axios.get(`${baseUrl}/generic/get_states`)
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
            const res = await axios.get(`${baseUrl}/generic/get_lga/${state_id}`)
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
            const res = await authAxios.get(`${baseUrl}/user/farmer/get_farms`)
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

    //Set Current Farm
    const setCurrent = farm => {
        dispatch({ 
            type: SET_CURRENT,
            payload: farm 
        })
    }

     //Clear Current Farm
     const clearCurrent = () => {
        dispatch({
             type: CLEAR_CURRENT 
        })
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
            equipments: state.equipments,
            userInfo: state.userInfo,
            equipmentServices: state.equipmentServices,
            equipmentRequests: state.equipmentRequests,
            current: state.current,
            setLoading,
            getFarmType,
            getStates,
            getLga,
            getFarms,
            createEquipmentRequest,
            getEquipmentRequests,
            getEquipmentServices,
            getEquipments,
            login,
            register,
            logout,
            addFarm,
            setCurrent,
            clearCurrent,
            updateFarm,
            deleteFarm
        }}>
            {props.children}
    </farmerContext.Provider>
}

export default FarmerState;
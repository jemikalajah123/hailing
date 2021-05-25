import React, { useReducer } from 'react'
import adminContext from './adminContext'
import adminReducer from './adminReducer'
import{
    SET_LOADING
} from '../types'


const AdminState = props => {
    const initialState = {
        loading: false
    }

    const [ state, dispatch ] = useReducer(adminReducer, initialState);    

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <adminContext.Provider
        value={{
            loading: state.loading,
            setLoading
        }}>
            {props.children}
    </adminContext.Provider>
}

export default AdminState;
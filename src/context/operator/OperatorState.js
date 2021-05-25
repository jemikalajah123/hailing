import React, { useReducer } from 'react'
import operatorContext from './operatorContext'
import operatorReducer from './operatorReducer'
import{
    SET_LOADING
} from '../types'


const OperatorState = props => {
    const initialState = {
        loading: false
    }

    const [ state, dispatch ] = useReducer(operatorReducer, initialState);    

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <operatorContext.Provider
        value={{
            loading: state.loading,
            setLoading
        }}>
            {props.children}
    </operatorContext.Provider>
}

export default OperatorState;
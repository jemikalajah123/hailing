import React, { useReducer } from 'react'
import investorContext from './investorContext'
import investorReducer from './investorReducer'
import{
    SET_LOADING
} from '../types'


const InvestorState = props => {
    const initialState = {
        loading: false
    }

    const [ state, dispatch ] = useReducer(investorReducer, initialState);    

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <investorContext.Provider
        value={{
            loading: state.loading,
            setLoading
        }}>
            {props.children}
    </investorContext.Provider>
}

export default InvestorState;
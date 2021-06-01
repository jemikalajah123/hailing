import React, { useState, useEffect,useContext,useReducer } from 'react'
import {Link} from "react-router-dom";
import farmerContext from "../../context/farmer/farmerContext";
import farmerReducer from "../../context/farmer/farmerReducer";

const Login= ({ location, history }) => {
    const FarmerContext = useContext(farmerContext);
    const { login, userInfo} = FarmerContext;

    const redirect = window.location.search ? location.search.split('=')[1] : '/farmer'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo,redirect])

    //Initialize states for the input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <section className="login p-fixed d-flex text-center bg-primary common-img-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="login-card card-block">
                            <form className="md-float-material" onSubmit={submitHandler}>
                                <div className="text-center">
                                    <img src="assets/images/logo-black.png" alt="logo"></img>
                                </div>
                                <h3 className="text-center txt-primary">
                                    Sign In to your account
                                </h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-control-label">Email</label>
                                            <input type="email" name="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-control-label">Password</label>
                                            <input type="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="rkmd-checkbox checkbox-rotate checkbox-ripple m-b-25">
                                            <label className="input-checkbox checkbox-primary">
                                                <input type="checkbox" id="checkbox" />
                                                    <span className="checkbox"></span>
                                            </label>
                                            <div className="captions">Remember Me</div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xs-12 forgot-phone text-right">
                                        <Link to="!#" className="text-right f-w-600"> Forget
                                            Password?</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-10 offset-xs-1">
                                        <button type="submit"
                                                className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign In
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 text-center">
                                    <span className="text-muted">Don't have an account?</span>
                                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className="f-w-600 p-l-5">Sign up Now</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Login
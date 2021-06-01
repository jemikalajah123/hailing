import React from 'react'
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <section className="login common-img-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="login-card card-block bg-white">
                            <form className="md-float-material" action="">
                                <div className="text-center">
                                    <img src="assets/images/logo-black.png" alt="logo"></img>
                                </div>
                                <h3 className="text-center txt-primary">Create an account </h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">First Name</label>
                                            <input type="text" className="form-control" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Last Name</label>
                                            <input type="text" className="form-control" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Email Address</label>
                                    <input type="email" className="form-control" required="required" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Phone Number</label>
                                    <input type="number" className="form-control" required="required" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Password</label>
                                    <input type="password" className="form-control" required="required" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Confirm Password</label>
                                    <input type="password" className="form-control" required="required"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">State</label>
                                            <input type="text" className="form-control" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-control-label">Local Government</label>
                                            <input type="text" className="form-control" required="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="rkmd-checkbox checkbox-rotate checkbox-ripple b-none m-b-20">
                                    <label className="input-checkbox checkbox-primary">
                                        <input type="checkbox" id="checkbox"/>
                                        <span className="checkbox"></span>
                                    </label>
                                    <div className="captions">I accept the Privacy Terms & Conditions</div>
                                </div>
                                <div className="col-xs-10 offset-xs-1">
                                    <button type="submit"
                                            className="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20">Sign
                                        up
                                    </button>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-center">
                                        <span className="text-muted">Already have an account?</span>
                                        <Link to="/Login" className="f-w-600 p-l-5"> Sign In Here</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register
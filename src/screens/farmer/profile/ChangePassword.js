import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import FarmerSidebar from '../FarmerSideBar'

const ChangePassword = () => {
   

    //Initialize states for the input values
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

   
    const onSubmit = () => {
        
        const updatedPassword = {
            newPassword
        }

        console.log(updatedPassword)
       
    }
    return (
        <Fragment>
            <FarmerSidebar />
            <div className="wrapper">
            <div className="content-wrapper">
                <div className="container-fluid">

            {/* <!-- Row Starts --> */}
               <div className="row">
                  <div className="col-sm-12 p-0">
                     <div className="main-header">
                        <h4>Change Password</h4>
                        <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                           <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
                           </li>
                           <li className="breadcrumb-item"><a href="!#">Profile</a>
                           </li>
                           <li className="breadcrumb-item"><Link to="/farmer/profile" >Change Password</Link>
                           </li>
                          
                        </ol>
                     </div>
                  </div>
               </div>
               {/* <!-- Row end --> */}

                {/* Form Input Begins */}
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="card">  
                                <div className="card-block">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="currentPassword" className="form-control-label">Current Password</label>
                                            <input type="password" className="form-control" name='currentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="newPassword" className="form-control-label">New Password</label>
                                            <input type="password" className="form-control" name='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmNewPassword" className="form-control-label">Confirm New Password</label>
                                            <input type="password" className="form-control" name='confirmNewPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}  required/>
                                        </div>
                                        <button type="submit" className="btn btn-success waves-effect waves-light m-r-30">Change Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Form Input Ends */}
                </div>
            </div>
        </div> 
        </Fragment>
    )
}

export default ChangePassword

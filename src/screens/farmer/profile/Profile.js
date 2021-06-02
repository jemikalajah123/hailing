import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FarmerSidebar from '../FarmerSideBar'
import farmerContext from '../../../context/farmer/farmerContext'

const Profile = () => {
    const FarmerContext = useContext(farmerContext);

    const { userInfo } = FarmerContext;
    console.log(userInfo);

    useEffect(() => { 

        if(userInfo !== null) {
            setFirstName(userInfo.first_name)
            setLastName(userInfo.last_name)
            setPhone(userInfo.phone)
            setAddress(userInfo.address)
        }
        else{
            setFirstName('')
            setLastName('')
            setPhone('')
            setAddress('')
        }
       //eslint-disable-next-line
    }, [FarmerContext, userInfo]);

    //Initialize states for the input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

   
    const onSubmit = () => {
        
        const updatedUser = {
            firstName,
            lastName,
            phone,
            address
        }

        console.log(updatedUser)
        //updateProfile(updatedUser);
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
                        <h4>Add Farm</h4>
                        <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                           <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
                           </li>
                           <li className="breadcrumb-item"><a href="!#">Profile</a>
                           </li>
                           <li className="breadcrumb-item"><Link to="/farmer/profile" >Update Profile</Link>
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
                                {
                                        userInfo !== null ? (
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="firstName" className="form-control-label">First Name</label>
                                            <input type="text" className="form-control" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="form-control-label">Last Name</label>
                                            <input type="text" className="form-control" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-control-label">Phone</label>
                                            <input type="text" className="form-control" name='phone' value={phone} onChange={e => setPhone(e.target.value)}  required/>
                                        </div>
                                      
                                       
                                        <div className="form-group">
                                            <label htmlFor="address" className="form-control-label">Address</label>
                                            <input type="text" className="form-control" name='address' value={address} onChange={e => setAddress(e.target.value)}  required/>
                                        </div>
                                        <button type="submit" className="btn btn-success waves-effect waves-light m-r-30">Update Profile</button>
                                    </form>
                                        ) : <span>No user information detected...</span>
                                        }
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

export default Profile

import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AddFarmForm = () => {

    useEffect(() => { 

        //Get users location when the component mounts
       getLocation();
       //eslint-disable-next-line
    }, []);

    //Initialize states for the input values
    const [farmName, setFarmName] = useState('');
    const [farmType, setFarmType] = useState('');
    const [farmState, setFarmState] = useState('');
    const [farmLga, setFarmLga] = useState('');
    const [farmAddress, setFarmAddress] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [status, setStatus] = useState(0);

   
    //Get Users location
    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            alert( "Geolocation is not supported by this browser.");
        }
      }
      
    //Set the longitude and latitude
    const showPosition = position => {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    setLatitude(latitude);
    setLongitude(longitude);
    
    }


    const onSubmit = () => {
        
        const newFarm = {
            farmName,
            farmType,
            farmState,
            farmLga,
            farmAddress,
            longitude,
            latitude,
            status
        }

    }

    return (
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
                           <li className="breadcrumb-item"><a href="!#">Farm</a>
                           </li>
                           <li className="breadcrumb-item"><Link to="/farm/farm/add" >Add Farm</Link>
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
                                            <label htmlFor="farmName" className="form-control-label">Farm Name</label>
                                            <input type="text" className="form-control" name='farmName' value={farmName} onChange={e => setFarmName(e.target.value)}  placeholder="Ajayi Farms" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="farmType" className="form-control-label">Farm Type</label>
                                            <input type="text" className="form-control" name='farmType' value={farmType} onChange={e => setFarmType(e.target.value)}  placeholder="Cocoa" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="farmState" className="form-control-label">State</label>
                                            <input type="text" className="form-control" name='farmState' value={farmState} onChange={e => setFarmState(e.target.value)}  placeholder="Lagos" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="farmLga" className="form-control-label">LGA</label>
                                            <input type="text" className="form-control" name='farmLga' value={farmLga} onChange={e => setFarmLga(e.target.value)}  placeholder="Ikeja" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="farmAddress" className="form-control-label">Address</label>
                                            <input type="text" className="form-control" name='farmAddress' value={farmAddress} onChange={e => setFarmAddress(e.target.value)}  placeholder="No 3, Hebert Perkins Street, Lekki" />
                                        </div>
                                        <button type="submit" className="btn btn-success waves-effect waves-light m-r-30">Add Farm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Form Input Ends */}
                </div>
            </div>
        </div>      
    )
}

export default AddFarmForm

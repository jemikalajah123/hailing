import React , { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'

const AddFarmForm = () => {

    const FarmerContext = useContext(farmerContext);

    const { getFarmType, getStates, getLga, farmLgas, farmStates, farmTypes } = FarmerContext;

    useEffect(() => { 

        //Get users location when the component mounts
        getLocation();
        getFarmType();
        getStates();
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


    //If State is not empty, make the call to get Local Government
    if(farmState !== ''){
        getLga(farmState);
    }

   
    //Get Users location
    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            console.log("Geolocation is not supported by this browser.");
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
        }

        console.log(newFarm);
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
                                        <div class="form-group">
                                            <label htmlFor="farmType" class="form-control-label">Farm Type</label>
                                                <select class="form-control " name="farmType" id="farmType" onChange={e => setFarmType(e.target.value)}>
                                                {farmTypes !== null ?
                                                        farmTypes.map(farmType => (
                                                            <option value={farmType.id} key={farmType.id}>{farmType.name}</option>
                                                        )) 
                                                    : <option>States could not be loaded</option>
                                                    }
                                                    
                                                </select>
                                        </div>
                                       
                                        <div class="form-group">
                                            <label htmlFor="farmState" class="form-control-label">Farm State</label>
                                                <select class="form-control " name="farmState" id="farmState" onChange={e => setFarmState(e.target.value)}>
                                                    {farmStates !== null ?
                                                        farmStates.map(farmState => (
                                                            <option value={farmState.id} key={farmState.id}>{farmState.name}</option>
                                                        )) 
                                                    : <option>States could not be loaded</option>
                                                    }
                                                    
                                                </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label htmlFor="farmLga" class="form-control-label">Farm Lga</label>
                                                <select class="form-control " name="farmLga" id="farmState" onChange={e => setFarmLga(e.target.value)}>
                                                    {farmLgas !== null ?
                                                        farmLgas.map(farmLga => (
                                                            <option value={farmLga.id} key={farmLga.id}>{farmLga.name}</option>
                                                        )) 
                                                    : <option>Select a state</option>
                                                    }
                                                    
                                                </select>
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

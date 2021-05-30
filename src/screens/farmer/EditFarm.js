import React, { Fragment, useContext, useState, useEffect } from 'react'
import FarmerSidebar from './FarmerSideBar'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'

const EditFarm = () => {

    const FarmerContext = useContext(farmerContext);

    const { getFarmType, farmTypes,  current } = FarmerContext;

    useEffect(() => { 

        getFarmType();
       //eslint-disable-next-line
    }, []);

    //Initialize states for the input values
    const [farmName, setFarmName] = useState(current.farm_name);
    const [farmType, setFarmType] = useState('');
    const [farmAddress, setFarmAddress] = useState(current.address);
    const [longitude] = useState(current.longitude);
    const [latitude] = useState(current.latitude);
    const [id] = useState(current.id);

    for(var a in current){
        console.log("current in edit farm " + current[a])
    }

    const onSubmit = () => {
        
        const newFarm = {
            id,
            farmName,
            farmType,
            farmAddress,
            longitude,
            latitude,
        }
        console.log("from onSubmit "+ newFarm)
        //updateFarm(newFarm);
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
                            <h4>Edit Farm</h4>
                            <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                            <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
                            </li>
                            <li className="breadcrumb-item"><a href="!#">Farm</a>
                            </li>
                            <li className="breadcrumb-item"><Link to="/farm/farm/manage/edit" >Edit Farm</Link>
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
                                        current !== null ? (
                                        <form onSubmit={onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="farmName" className="form-control-label">Farm Name</label>
                                                <input type="text" className="form-control" name='farmName' defaultValue={current.farm_name} onChange={e => setFarmName(e.target.value)}  placeholder="Ajayi Farms" />
                                            </div>
                                            <div class="form-group">
                                                <label htmlFor="farmType" class="form-control-label">Farm Type</label>
                                                    <select class="form-control " name="farmType" id="farmType" onChange={e => setFarmType(e.target.value)}>
                                                    {farmTypes !== null ?
                                                            farmTypes.map(farmType => (
                                                                <option value={farmType.id} key={farmType.id}>{farmType.name}</option>
                                                            )) 
                                                        : <option>Farm Types could not be loaded</option>
                                                        }
                                                        
                                                    </select>
                                            </div>  
                                        
                                            <div className="form-group">
                                                <label htmlFor="farmAddress" className="form-control-label">Address</label>
                                                <input type="text" className="form-control" name='farmAddress' defaultValue={current.address} onChange={e => setFarmAddress(e.target.value)}  placeholder="No 3, Hebert Perkins Street, Lekki" />
                                            </div>
                                            <button type="submit" className="btn btn-success waves-effect waves-light m-r-30">Update Farm</button>
                                        </form>
                                        ) : <span>No farm selected</span>
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

export default EditFarm

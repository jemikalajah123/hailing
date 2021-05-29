import React, { Fragment, useContext, useState, useEffect } from 'react'
import FarmerSidebar from './FarmerSideBar'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'

const EditFarm = () => {

    const FarmerContext = useContext(farmerContext);

    const { current, farmTypes, updateFarm, getFarmType } = FarmerContext;

    useEffect(() => { 
        getFarmType();
       //eslint-disable-next-line
    }, []);

    const [farmName, setFarmName] = useState('');
    const [farmType, setFarmType] = useState('');
    const [farmAddress, setFarmAddress] = useState('');

    if(current !== null){
        var longitude = current.longitude;
        var latitude = current.latitude;
        var id = current.id;
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

        updateFarm(newFarm);
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
                                {current !== null ?(
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="farmName" className="form-control-label">Farm Name</label>
                                            <input type="text" className="form-control" name='farmName' onChange={e => setFarmName(e.target.value)} value={current.farm_name} />
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
 
                                        <div className="form-group">
                                            <label htmlFor="farmAddress" className="form-control-label">Farm Address</label>
                                            <input type="text" className="form-control" name='farmAddress' onChange={e => setFarmAddress(e.target.value)} value={current.address} />
                                        </div>
                                        <button type="submit" className="btn btn-success waves-effect waves-light m-r-30">Update Farm</button>
                                    </form>
                                     ) : <span>No farm selected</span>}
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

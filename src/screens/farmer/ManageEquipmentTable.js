import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import farmerContext from "../../context/farmer/farmerContext";
import ManageEquipmentTableRow from "./ManageEquipmentTableRow";


const ManageEquipmentTable = () => {

    const FarmerContext = useContext(farmerContext);

    const { getEquipmentRequests, equipmentRequests } = FarmerContext;

    useEffect(() => {
        getEquipmentRequests()
        //eslint-disable-next-line
    }, []);
    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="container-fluid">

                    {/* <!-- Row Starts --> */}
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <div className="main-header">
                                <h4>Manage Farm</h4>
                                <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="/farmer/farm/equipment">Farm Equipments</a>
                                    </li>
                                    <li className="breadcrumb-item"><Link to="/farmer/farm/equipment/view" >Manage Equipments</Link>
                                    </li>

                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Row end --> */}

                    {/* <!-- Hover effect table starts --> */}
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-header-text">List of Hired Equipments</h5>
                            <p>You can re-hire</p>
                        </div>
                        <div class="card-block">
                            <div class="row">
                                <div class="col-sm-12 table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Farm Name</th>
                                            <th>Equipment Name</th>
                                            <th>Service Price</th>
                                            <th>Caution fee</th>
                                            <th>Start Date</th>
                                            <th>Status</th>
                                            <th>Hire Again</th>
                                        </tr>
                                        </thead>
                                        {
                                            equipmentRequests !== null ? equipmentRequests.map(equipmentRequest => (
                                                <ManageEquipmentTableRow equipmentRequest={equipmentRequest} key={equipmentRequest.id} />
                                            )) : <span>No data to display</span>
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Hover effect table ends --> */}
                </div>
            </div>
        </div>
    )
}

export default ManageEquipmentTable

import React, {Fragment, useContext, useEffect} from 'react';
import FarmerSideBar from './FarmerSideBar';
import EquipmentServiceCard from './EquipmentServiceCard';
import { Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import farmerContext from "../../context/farmer/farmerContext";

const EquipmentServiceScreen = () => {

    const FarmerContext = useContext(farmerContext);

    const { getEquipmentServices, equipmentServices } = FarmerContext;

    useEffect(() => {
        getEquipmentServices()
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <FarmerSideBar />
            <div className="content-wrapper">
                <div className="container-fluid">
                    {/* <!-- Row Starts --> */}
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <div className="main-header">
                                <h4>Farm Equipments</h4>
                                <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                                    <li className="breadcrumb-item"><Link href="/farm"><i className="icofont icofont-home"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item"><Link to="/farmer/farm/equipment">Available Equipments</Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Row end --> */}
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={3}>
                            {
                                equipmentServices !== null ? equipmentServices.map(equipmentService => (
                                    <EquipmentServiceCard equipmentService={equipmentService} key={equipmentService.id} />
                                )) : <span>No data to display</span>
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default EquipmentServiceScreen
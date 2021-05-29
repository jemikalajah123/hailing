import React, { Fragment } from 'react';
import FarmerSideBar from './FarmerSideBar';
import EquipmentCard from './EquipmentCard';
import { Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

const RequestScreen = () => {
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
                            <EquipmentCard />
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default RequestScreen
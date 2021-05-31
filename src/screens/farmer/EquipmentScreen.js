import React, {Fragment, useContext, useEffect} from 'react';
import FarmerSideBar from './FarmerSideBar';
import EquipmentCard from './EquipmentCard';
import { Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import farmerContext from "../../context/farmer/farmerContext";

const EquipmentScreen = ({match}) => {

    const FarmerContext = useContext(farmerContext);

    const { getEquipments, equipments } = FarmerContext;

    useEffect(() => {
        getEquipments(match.params.id)
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
                                    <Link to={`/farmer/farm/equipment/${match.params.id}`}>
                                        <button type="button" className="btn btn-warning waves-effect waves-light f-right text-uppercase m-r-30">
                                            Hire This Service
                                        </button>
                                    </Link>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Row end --> */}
                    <Row>
                        {equipments !== null ? equipments.map((equipment) => (
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <EquipmentCard equipment={equipment} key={equipment.id} />
                            </Col>
                        )): <span>No data to display</span>
                        }
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default EquipmentScreen
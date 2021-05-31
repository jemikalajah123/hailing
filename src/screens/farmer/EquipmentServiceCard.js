import React from 'react'
import { Link } from 'react-router-dom'

const EquipmentServiceCard = ({ equipmentService: {id, custom_name,service_price, image, quantity_available,caution_fee, terms_and_condition, operator_status } }) => {
    return (
        <div className="card">
            <Link to={`/farmer/farm/equipment/service/${id}`}>
                <div className="user-block-2">
                    <img className="img-fluid image-service" src={image} alt="user-header"></img>
                </div>
            </Link>

            <div className="card-block">
                <div className="user-block-2-activities">
                    <div className="user-block-2-active">
                        <i className="fas fa-tractor"></i>Service
                        <label className="label label-primary">${service_price}</label>
                    </div>
                </div>
                <div className="user-block-2-activities">
                    <div className="user-block-2-active">
                        <i className="fas fa-tractor"></i>Caution
                        <label className="label label-primary">${caution_fee}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquipmentServiceCard
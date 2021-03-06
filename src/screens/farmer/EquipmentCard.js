import React from 'react'
import { Link } from 'react-router-dom'

const EquipmentServiceCard = ({ equipment: {id, equipment,service_price, image, quantity_available,caution_fee, terms_and_condition, operator_status } }) => {
    return (
        <div className="card">
            <Link to={`/farmer/farm/equipment/service/${id}`}>
                <div className="user-block-2">
                    <img className="img-fluid image-service" src={equipment.image} alt="user-header"></img>
                </div>
            </Link>
            <div className="card-block">
                <div className="user-block-2-activities">
                    <div className="user-block-2-active">
                        <i className="fas fa-tractor"></i>{equipment.name}
                        <label className="label label-primary">${equipment.service_price}</label>
                    </div>
                </div>
                <div className="user-block-2-activities">
                    <div className="user-block-2-active">
                        <i className="fas fa-tractor"></i>{equipment.manufacturer}
                        <label className="label label-primary">${equipment.caution_fee}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquipmentServiceCard
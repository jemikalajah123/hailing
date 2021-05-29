import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EquipmentCard = () => {
    return (
        <div className="card">
            <div className="user-block-2">
                <img className="img-fluid" src="/assets/images/widget/user-1.png" alt="user-header"></img>
            </div>
            <div className="card-block">
                <div className="user-block-2-activities">
                    <div className="user-block-2-active">
                        <i className="fas fa-tractor"></i> Shovel
                        <label className="label label-primary">$4800</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-primary waves-effect waves-light text-uppercase">
                        Hire Equipment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EquipmentCard
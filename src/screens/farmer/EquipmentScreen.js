import React from 'react'
import FarmerSidebar from './FarmerSideBar'
import Checkout from './Checkout'

const EquipmentScreen = () => {
    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <FarmerSidebar />
                <Checkout />
            </div>
        </div>
    )
}

export default EquipmentScreen
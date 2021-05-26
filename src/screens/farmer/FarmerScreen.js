import React, { Fragment } from 'react'
import FarmerSideBar from './FarmerSideBar'
import FarmerDashboard from './FarmerDashboard'

const FarmerScreen = () => {
    return (
        <Fragment>
            <FarmerSideBar />
            <FarmerDashboard />
        </Fragment>
    )
}

export default FarmerScreen

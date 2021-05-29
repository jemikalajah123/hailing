import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'

const ManageFarmTableRow = ( { farm } ) => {


   const FarmerContext = useContext(farmerContext);

   const { setCurrent } = FarmerContext;
    
    return (
        <tbody>
            <tr>
                <td>{farm.id}</td>
                <td>{farm.farm_name}</td>
                <td>{farm.farm_type.name}</td>
                <td>{farm.state.name}</td>
                <td>{farm.cluster.name}</td>
                <td>{farm.city.name}</td>
                <td>{farm.address}</td>
                <td className="button-container">
                    <Link  to="/farmer/farm/manage/edit" onClick={() => setCurrent(farm)} type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</Link>
                    <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                </td>
            </tr>
        </tbody>
    )
}

export default ManageFarmTableRow

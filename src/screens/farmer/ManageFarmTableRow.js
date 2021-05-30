import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'

const ManageFarmTableRow = ( { farm } ) => {


   const FarmerContext = useContext(farmerContext);

   const { setCurrent, deleteFarm, clearCurrent } = FarmerContext;

   const { id, farm_name, farm_type, state, cluster, city, address } = farm;

   const onDelete = () => {

        deleteFarm(id)
        clearCurrent()
   }
    
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{farm_name}</td>
                <td>{farm_type.name}</td>
                <td>{state.name}</td>
                <td>{cluster.name}</td>
                <td>{city.name}</td>
                <td>{address}</td>
                <td className="button-container">
                    <Link  to="/farmer/farm/manage/edit" onClick={() => setCurrent(farm)} type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</Link>
                    <button type="button" onClick={onDelete} className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                </td>
            </tr>
        </tbody>
    )
}

export default ManageFarmTableRow

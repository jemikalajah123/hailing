import React from 'react'

const ManageFarmTableRow = ( { farm: { id, farm_name, address, farm_type,state, cluster, city } } ) => {
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
                    <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                    <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                </td>
            </tr>
        </tbody>
    )
}

export default ManageFarmTableRow

import React, { useEffect } from 'react'


const ManageEquipmentTableRow = ({ equipmentRequest: {farm_id,equipment_service_setting,createdAt,status } }) => {
    useEffect(() => {
        //eslint-disable-next-line
    }, []);

    return (
        <tbody>
        <tr>
            <td>{farm_id}</td>
            <td>{equipment_service_setting.custom_name}</td>
            <td>{equipment_service_setting.service_price}</td>
            <td>{equipment_service_setting.caution_fee}</td>
            <td>{createdAt}</td>
            <td>{status}</td>
            <td className="button-container">
                <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">Hire</button>
            </td>
        </tr>
        </tbody>
    )
}

export default ManageEquipmentTableRow

import React from 'react';
import { Link } from 'react-router-dom'

const FarmerSidebar = () => {
    return(
        <aside className="main-sidebar hidden-print ">
            <section className="sidebar" id="sidebar-scroll">
                <ul className="sidebar-menu">
                    <li className="active treeview">
                        <a className="waves-effect waves-dark" href="/farmer">
                            <i className="icon-speedometer"></i><span> Dashboard</span>
                        </a>
                    </li>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="fas fa-briefcase"></i><span> Equipment Requests</span></a>  
                    </li>
                    <li>
                        <Link className="waves-effect waves-dark" to="/farmer/farm/equipment"><i className="far fa-plus-square"></i> New Request</Link>
                    </li>
                    <li>
                        <Link className="waves-effect waves-dark" to="/farmer/farm/equipment/view"><i className="fas fa-eye"></i>View Requests</Link>
                    </li>
                    <hr></hr>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="fas fa-chart-line"></i><span>Equipment Report</span></a>   
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i className="far fa-smile"></i>Rate Job</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i className="fas fa-comments"></i>Complaints</a>
                    </li>
                    <hr></hr>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="fas fa-tractor"></i><span> Farm</span></a>
                    </li>
                    <li>
                        <Link to="/farmer/farm/add" className="waves-effect waves-dark"><i className="fas fa-plus-circle"></i>Add Farm</Link>
                    </li>
                    <li>
                        <Link to="/farmer/farm/manage" className="waves-effect waves-dark"><i className="fas fa-tasks"></i> Manage Farm</Link>
                    </li>
                    <hr></hr>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="!#"><i className="fas fa-user"></i><span>Profile</span></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="/farmer/change_password"><i className="fas fa-unlock-alt"></i>Change Password</a>
                    </li>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="/farmer/profile"><i className="fas fa-user-edit"></i>Edit Details</a>
                    </li>
                </ul>
            </section>
        </aside>
    )
};


export default FarmerSidebar;
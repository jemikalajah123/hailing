import React from 'react';

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
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-briefcase"></i><span> Equipment Requests</span></a>  
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="far fa-plus-square"></i> New Request</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-eye"></i>View Requests</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-chart-line"></i><span>Equipment Report</span></a>   
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="far fa-smile"></i>Rate Job</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-comments"></i>Complaints</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-tractor"></i><span> Farm</span></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-plus-circle"></i>Add Farm</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-tasks"></i> Manage Farm</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-user"></i><span>Profile</span></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-unlock-alt"></i>Change Password</a>
                    </li>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-user-edit"></i>Edit Details</a>
                    </li>
                </ul>
            </section>
        </aside>
    )
};


export default FarmerSidebar;
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
                        <a className="waves-effect waves-dark" href="#!"><i className="icon-briefcase"></i><span> Equipment Requests</span></a>  
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="/farmer/new_request"> New Request</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="/farmer/view_requests">View Requests</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="icon-chart"></i><span>Equipment Report</span></a>   
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="float-chart.html"> Rate Job</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="morris-chart.html">Complaints</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="icon-book-open"></i><span> Farm</span></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="form-elements-bootstrap.html">Add Farm</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="form-elements-advance.html"> Manage Farm</a>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i className="icon-user"></i><span>Profile</span></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-unlock-alt"></i>Change Password</a>
                    </li>
                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="#!"><i class="fas fa-key"></i>Edit Details</a>
                    </li>
                </ul>
            </section>
        </aside>
    )
};


export default FarmerSidebar;
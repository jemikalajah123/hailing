import React from 'react';

const Sidebar = () => {
    return(
        <aside className="main-sidebar hidden-print ">
            <section className="sidebar" id="sidebar-scroll">
                <ul className="sidebar-menu">
                    <li className="active treeview">
                        <a className="waves-effect waves-dark" href="index.html">
                            <i className="icon-speedometer"></i><span> Dashboard</span>
                        </a>
                    </li>
                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i
                        className="icon-briefcase"></i><span> Equipment Requests</span><i className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" href="accordion.html"><i
                                className="icon-arrow-right"></i> Accordion</a></li>
                            <li><a className="waves-effect waves-dark" href="button.html"><i
                                className="icon-arrow-right"></i> Button</a></li>
                            <li><a className="waves-effect waves-dark" href="label-badge.html"><i
                                className="icon-arrow-right"></i> Label Badge</a></li>
                            <li><a className="waves-effect waves-dark" href="bootstrap-ui.html"><i
                                className="icon-arrow-right"></i> Grid system</a></li>
                            <li><a className="waves-effect waves-dark" href="box-shadow.html"><i
                                className="icon-arrow-right"></i> Box Shadow</a></li>
                            <li><a className="waves-effect waves-dark" href="color.html"><i
                                className="icon-arrow-right"></i> Color</a></li>
                            <li><a className="waves-effect waves-dark" href="light-box.html"><i
                                className="icon-arrow-right"></i> Light Box</a></li>
                        </ul>
                    </li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i
                        className="icon-chart"></i><span>Equipment Report</span><i className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" href="float-chart.html"><i
                                className="icon-arrow-right"></i> Float Charts</a></li>
                            <li><a className="waves-effect waves-dark" href="morris-chart.html"><i
                                className="icon-arrow-right"></i> Morris Charts</a></li>
                        </ul>
                    </li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i
                        className="icon-book-open"></i><span> Farm</span><i className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" href="form-elements-bootstrap.html"><i
                                className="icon-arrow-right"></i> Form Elements Bootstrap</a></li>

                            <li><a className="waves-effect waves-dark" href="form-elements-advance.html"><i
                                className="icon-arrow-right"></i> Form Elements Advance</a></li>
                        </ul>
                    </li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i
                        className="icofont icofont-company"></i><span>Profile</span><i
                        className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li>
                                <a className="waves-effect waves-dark" href="#!">
                                    <i className="icon-arrow-right"></i>
                                    Level Two
                                </a>
                            </li>
                            <li className="treeview">
                                <a className="waves-effect waves-dark" href="#!">
                                    <i className="icon-arrow-right"></i>
                                    <span>Level Two</span>
                                    <i className="icon-arrow-down"></i>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a className="waves-effect waves-dark" href="#!">
                                            <i className="icon-arrow-right"></i>
                                            Level Three
                                        </a>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="#!">
                                            <i className="icon-arrow-right"></i>
                                            <span>Level Three</span>
                                            <i className="icon-arrow-down"></i>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li>
                                                <a className="waves-effect waves-dark" href="#!">
                                                    <i className="icon-arrow-right"></i>
                                                    Level Four
                                                </a>
                                            </li>
                                            <li>
                                                <a className="waves-effect waves-dark" href="#!">
                                                    <i className="icon-arrow-right"></i>
                                                    Level Four
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    )
};


export default Sidebar;
import React from 'react';

const FarmerDashboard = () => {
    return(
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="main-header">
                        <h4>Dashboard</h4>
                    </div>
                </div>
                <div class="row dashboard-header">
                    <div class="col-lg-3 col-md-6">
                        <div class="card dashboard-product">
                            <span>Equipments</span>
                            <h2 class="dashboard-total-products">4500</h2>
                            <span class="label label-warning">Sales</span>Arriving Today
                            <div class="side-box">
                                <i class="ti-signal text-warning-color"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card dashboard-product">
                            <span>Approved requests</span>
                            <h2 class="dashboard-total-products">10</h2>
                            <span class="label label-primary">Views</span>View Today
                            <div class="side-box ">
                                <i class="ti-gift text-primary-color"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card dashboard-product">
                            <span>Pending Equipment Request</span>
                            <h2 class="dashboard-total-products"><span>5</span></h2>
                            <span class="label label-success">Sales</span>Reviews
                            <div class="side-box">
                                <i class="ti-direction-alt text-success-color"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card dashboard-product">
                            <span>Wallet</span>
                            <h2 class="dashboard-total-products">$<span>30,780</span></h2>
                            <span class="label label-danger">Sales</span>Balance
                            <div class="side-box">
                                <i class="ti-rocket text-danger-color"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="user-block-2">
                                <img class="img-fluid" src="assets/images/widget/user-1.png" alt=""></img>
                                    <h5>Josephin Villa</h5>
                                    <h6>Farmer</h6>
                            </div>
                            <div class="card-block">
                                <div class="user-block-2-activities">
                                    <div class="user-block-2-active">
                                        <i class="icofont icofont-clock-time"></i> Recent Activities
                                        <label class="label label-primary">480</label>
                                    </div>
                                </div>
                                <div class="user-block-2-activities">
                                    <div class="user-block-2-active">
                                        <i class="icofont icofont-users"></i> Current Employees
                                        <label class="label label-primary">390</label>
                                    </div>
                                </div>

                                <div class="user-block-2-activities">
                                    <div class="user-block-2-active">
                                        <i class="icofont icofont-ui-user"></i> Following
                                        <label class="label label-primary">485</label>
                                    </div>

                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-warning waves-effect waves-light text-uppercase m-r-30">
                                        Follows
                                    </button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light text-uppercase">
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-text">Garage map</h5>
                            </div>
                            <div class="card-block">
                                <div id="barchart" className="barchart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 grid-item">
                        <div class="card">
                            <div class="card-block horizontal-card-img d-flex">
                                <img class="media-object img-circle" src="assets/images/avatar-3.png" alt=""></img>
                                    <div class="d-inlineblock  p-l-20">
                                        <h6>Josephin Doe</h6>
                                        <a href="!#">contact@admin.com</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 grid-item">
                        <div class="card">
                            <div class="card-block horizontal-card-img d-flex">
                                <img class="media-object img-circle" src="assets/images/lockscreen.png" alt=""></img>
                                    <div class="d-inlineblock  p-l-20">
                                        <h6>Ester Doe</h6>
                                        <a href="!#">contact@admin.com</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8 col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <div class="table-responsive">
                                    <table class="table m-b-0 photo-table">
                                        <thead>
                                        <tr class="text-uppercase">
                                            <th>Photo</th>
                                            <th>Project</th>
                                            <th>Completed</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-2.png" alt="User"></img>
                                            </th>
                                            <td>Appestia Project
                                                <p><i class="icofont icofont-clock-time"></i>Created 14.9.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart">226,134</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 1 1 4.209902994920235 25.41987555688496 L 15 15" fill="#2196F3"></path><path d="M 4.209902994920235 25.41987555688496 A 15 15 0 0 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>50%</td>
                                            <td>October 21, 2015</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-4.png" alt="User"></img>
                                            </th>
                                            <td>Contract with belife Company
                                                <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>70%</td>
                                            <td>November 21, 2015</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-1.png" alt="User"></img>
                                            </th>
                                            <td>Web Consultancy project
                                                <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart" >1,4</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 29.265847744427305 10.36474508437579 L 15 15" fill="#2196F3"></path><path d="M 29.265847744427305 10.36474508437579 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>40%</td>
                                            <td>September 21, 2015</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-3.png" alt="User"></img>
                                            </th>
                                            <td>Contract with belife Company
                                                <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>70%</td>
                                            <td>November 21, 2015</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-1.png" alt="User"></img>
                                            </th>
                                            <td>Contract with belife Company
                                                <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>70%</td>
                                            <td>November 21, 2015</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img class="img-fluid img-circle" src="assets/images/avatar-2.png" alt="User"></img>
                                            </th>
                                            <td>Contract with belife Company
                                                <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                            </td>
                                            <td>
                                                <span class="pie piechart">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                            </td>
                                            <td>70%</td>
                                            <td>November 21, 2015</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-text">Bar chart</h5>
                            </div>
                            <div class="card-block">
                                <div id="piechart" className="piecharts-box" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fixed-button">
                <a href="#!" class="btn btn-md btn-primary">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro
                </a>
            </div>
        </div>
    )
};


export default FarmerDashboard;
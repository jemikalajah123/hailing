import React from 'react'
import { Link } from 'react-router-dom'

const ManageFarmTable = () => {
    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="container-fluid">

                {/* <!-- Row Starts --> */}
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <div className="main-header">
                            <h4>Manage Farm</h4>
                            <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                            <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
                            </li>
                            <li className="breadcrumb-item"><a href="!#">Farm</a>
                            </li>
                            <li className="breadcrumb-item"><Link to="/farm/farm/manage" >Manage Farm</Link>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                </div>
               {/* <!-- Row end --> */}

                {/* <!-- Hover effect table starts --> */}
                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-header-text">List of farms you own</h5>
                        <p>Edit to make changes or delete farm.</p>
                     </div>
                     <div class="card-block">
                        <div class="row">
                           <div class="col-sm-12 table-responsive">
                              <table class="table table-hover">
                                 <thead>
                                    <tr>
                                       <th>#</th>
                                       <th>FARM NAME</th>
                                       <th>FARM TYPE</th>
                                       <th>STATE</th>
                                       <th>LGA</th>
                                       <th>ADDRESS</th>
                                       <th>UPDATE/DELETE</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>1</td>
                                       <td>Mark</td>
                                       <td>Otto</td>
                                       <td>@mdo</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                       
                                    </tr>
                                    <tr>
                                       <td>2</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>3</td>
                                       <td>Larry</td>
                                       <td>Otto</td>
                                       <td>@twitter</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>4</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>5</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>6</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>7</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>8</td>
                                       <td>Jacob</td>
                                       <td>Thornton</td>
                                       <td>@fat</td>
                                       <td>Ducky</td>
                                       <td>Ducky</td>
                                       <td className="button-container">
                                            <button type="button" className="btn button_style btn-inverse-primary waves-effect waves-light">EDIT</button>
                                            <button type="button" className="btn button_style btn-inverse-danger waves-effect waves-light">DELETE</button>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- Hover effect table ends --> */}
                </div>
            </div>
        </div>
    )
}

export default ManageFarmTable

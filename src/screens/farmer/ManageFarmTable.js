import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import farmerContext from '../../context/farmer/farmerContext'
import ManageFarmTableRow from './ManageFarmTableRow'

const ManageFarmTable = () => {

   const FarmerContext = useContext(farmerContext);

   const { getFarms, farms } = FarmerContext;

   useEffect(() => { 

      //Get all farmers farms when the component mounts
      getFarms();
     //eslint-disable-next-line
  }, []);

  console.log(farms);

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
                                       <th>CITY</th>
                                       <th>ADDRESS</th>
                                       <th>UPDATE/DELETE</th>
                                    </tr>
                                 </thead>
                                 {
                                    farms !== null ? farms.map(farm => (
                                       <ManageFarmTableRow farm={farm} key={farm.id} />
                                    )) : <span>No data to display</span>
                                 }
                                    
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

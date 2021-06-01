import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FarmerState from './context/farmer/FarmerState'
import AdminState from './context/admin/AdminState'
import InvestorState from './context/investor/InvestorState'
import OperatorState from './context/operator/OperatorState'
import Header from './components/layouts/Header';
import FarmerScreen from "./screens/farmer/FarmerScreen";
import AddFarm from "./screens/farmer/AddFarm";
import ManageFarm from "./screens/farmer/ManageFarm";
import AdminScreen from "./screens/admin/AdminScreen";
import EquipmentServiceScreen from "./screens/farmer/EquipmentServiceScreen";
import EquipmentScreen from "./screens/farmer/EquipmentScreen";
import OperatorScreen from "./screens/operator/OperatorScreen";
import InvestorScreen from "./screens/investor/InvestorScreen";
import React from "react";
import ManageEquipment from "./screens/farmer/ManageEquipment";
import CheckoutScreen from "./screens/farmer/CheckoutScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
      <FarmerState>
        <AdminState>
          <InvestorState>
            <OperatorState>
              <Router>
                <div className='App'>
                  <Header />
                    <Switch>
                      <Route path='/login' component={LoginScreen} exact/>
                      <Route path='/register' component={RegisterScreen} exact/>
                      <Route path='/farmer' component={FarmerScreen} exact/>
                      <Route path='/farmer/farm/equipment' component={EquipmentServiceScreen} exact/>
                      <Route path='/farmer/farm/equipment/view' component={ManageEquipment} exact/>
                      <Route path='/farmer/farm/equipment/service/:id' component={EquipmentScreen} exact/>
                      <Route path='/farmer/farm/equipment/:id' component={CheckoutScreen} exact/>
                      <Route path='/farmer/farm/add' component={AddFarm} exact/>
                      <Route path='/farmer/farm/manage' component={ManageFarm} exact/>
                      <Route path='/admin' component={AdminScreen} />
                      <Route path='/operator' component={OperatorScreen} />
                      <Route path='/investor' component={InvestorScreen} />
                    </Switch> 
                </div>
              </Router>
            </OperatorState>
          </InvestorState>
        </AdminState>
      </FarmerState>
  );
}

export default App;

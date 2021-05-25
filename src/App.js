import { BrowserRouter as Router, Route } from 'react-router-dom';
import FarmerState from './context/farmer/FarmerState'
import AdminState from './context/admin/AdminState'
import InvestorState from './context/investor/InvestorState'
import OperatorState from './context/operator/OperatorState'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import FarmerScreen from "./screens/farmer/FarmerScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import OperatorScreen from "./screens/operator/OperatorScreen";
import InvestorScreen from "./screens/investor/InvestorScreen";
import React from "react";

const App = () => {
  return (
      <FarmerState>
        <AdminState>
          <InvestorState>
            <OperatorState>
                <Router className='App'>
                  <Header />
                    <Route path='/farmer' component={FarmerScreen} />
                    <Route path='/admin' component={AdminScreen} />
                    <Route path='/operator' component={OperatorScreen} />
                    <Route path='/investor' component={InvestorScreen} />
                  <Footer />
                </Router>
            </OperatorState>
          </InvestorState>
        </AdminState>
      </FarmerState>
  );
}

export default App;

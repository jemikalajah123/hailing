import { BrowserRouter as Router, Route } from 'react-router-dom';
import FarmerState from './context/farmer/FarmerState'
import AdminState from './context/Admin/FarmerState'
import InvestorState from './context/Investor/FarmerState'
import OperatorState from './context/Operator/FarmerState'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomeScreen from "./screens/HomeScreen";
import React from "react";

const App = () => {
  return (
      <FarmerState>
        <AdminState>
          <InvestorState>
            <OperatorState>
                <Router className='App'>
                  <Header />
                  <Sidebar />
                    <Route path='/' component={HomeScreen} exact/>
                  <Footer />
                </Router>
            </OperatorState>
          </InvestorState>
        </AdminState>
      </FarmerState>
  );
}

export default App;

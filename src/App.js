import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomeScreen from "./screens/HomeScreen";
import Farmer from "./components/Farmer";
import React from "react";

function App() {
  return (
      <Router className='App'>
        <Header />
        <Sidebar />
          <Route path='/' component={HomeScreen} exact/>
        <Footer />
      </Router>
  );
}

export default App;

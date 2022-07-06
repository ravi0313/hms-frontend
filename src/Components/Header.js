import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";
import PatientRegistration from "./PatientRegistration";
import DoctorRegistration from './DoctorRegistration';
import Logout from "./Logout";

class Header extends Component{
    render(){
        return(
            <Router>
                <div className='text-uppercase'>
                    <nav className="navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between "  >
                        <nav className="navbar navbar-light">
                            <h2>HOSPITAL MANAGEMENT SYSTEM</h2>
                        </nav>
                        <ul className="nav" >
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Login </Link></li>
                            <li className='nav-item'><Link to={'/PatientRegistration'} className="nav-link">Patient Registration </Link></li>
                            <li className='nav-item'><Link to={'/DoctorRegistration'} className="nav-link">Doctor Registration </Link></li>
                            <li className='nav-item'><Link to={'/logout'} className="nav-link"> Logout </Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route path={'/PatientRegistration'} element={<PatientRegistration/>} />
                        <Route path={'/DoctorRegistration'} element={<DoctorRegistration/>} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
  
  export default Header;
  
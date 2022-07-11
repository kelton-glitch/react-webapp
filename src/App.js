import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import Edit from './components/edit.component';
import CreateEmployee from './components/create.component';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className = "navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
              positronX
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to ={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ={'/sign-up'}>
                  Sign Up
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to ={'/edit-employee'}>
                  Edit Info
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to ={'/create-employee'}>
                  Add Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element = {<Login />} />
            <Route path="/sign-in" element = {<Login />} />
            <Route path="/sign-up" element = {<SignUp />} />
            <Route path="/edit-employee" element = {<Edit />} />
            <Route path="/create-employee" element = {<CreateEmployee />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App;

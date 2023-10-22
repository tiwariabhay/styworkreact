import React from "react";
import { NavLink } from "react-router-dom";
const AgentNav = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">STY WORK<span>.</span></a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
            <li className="nav-items"><NavLink to="/AdminDash">Dashboard</NavLink></li> 
             <li className="nav-items"><NavLink to="/agentQuery">View Query</NavLink></li> 
             <li className="nav-items"><NavLink to="/AdminLogout">Logout</NavLink></li> 
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default AgentNav;
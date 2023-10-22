import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">STY WORK<span>.</span></a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li><NavLink to="/" activeStyle>Home</NavLink></li>
              <li><NavLink to="/adminlogin" activeStyle>Login</NavLink></li>
              <li><NavLink to="/querystatus" activeStyle>Check Query Status</NavLink></li>
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

export default Navbar;
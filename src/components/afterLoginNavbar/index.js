import React from "react";
import { NavLink } from "react-router-dom";
const navbarAfter = () => {
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
              <li className="nav-items nav_design"><NavLink to="/">manage Categories</NavLink>
              <ul className="dropdown"> 
              <li  className="nav-items"><NavLink to="/AddCat">Add New Category</NavLink></li>
              <li className="nav-items"><NavLink to="/AddSubCat">Add New Sub Category</NavLink></li>
              <li className="nav-items"><NavLink to="/AddMicroCat">Add New Micro Category</NavLink></li>
              <li className="nav-items"><NavLink to="/CreateCatForm">Create Category form</NavLink></li>
              {/* <li className="nav-items"><NavLink to="/subcatpage">Sub Category Page</NavLink></li> */}
              <li className="nav-items"><NavLink to="/showhideCat">Show/ hide Category</NavLink></li> 
             </ul></li> 
             <li className="nav-items"><NavLink to="/stateList">Manage state</NavLink></li> 
             <li className="nav-items"><NavLink to="/cityList">Manage City</NavLink></li> 
             <li className="nav-items nav_design"><NavLink to="/">Join Us</NavLink>
             <ul className="dropdown"> 
              <li  className="nav-items"><NavLink to="/becomepartner">Service Man</NavLink></li>
              <li className="nav-items"><NavLink to="/becomeCaller">Caller</NavLink></li>
              <li className="nav-items"><NavLink to="/becomeVendor">Vendor</NavLink></li>
              {/* <li className="nav-items"><NavLink to="/CreateCatForm">Create Category form</NavLink></li> */}
              {/* <li className="nav-items"><NavLink to="/subcatpage">Sub Category Page</NavLink></li> */}
              {/* <li className="nav-items"><NavLink to="/showhideCat">Show/ hide Category</NavLink></li>  */}
             </ul>
             </li> 
             <li className="nav-items"><NavLink to="/viewquery">View Query</NavLink></li> 
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

export default navbarAfter;
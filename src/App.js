import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AfterloginNavbar from './components/afterLoginNavbar';
import AgentNav from './components/AgentNavi';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './Pages/Index';
import About from './Pages/about';
import Blogs from './Pages/blogs.js';
import SignUp from './Pages/signup.js';
import Contact from './Pages/contact.js';
import Adminlogin from './Pages/AdminLogin';
import AdminDash from './Pages/Admin_pages/AdmindahPage';
import AddCatPage from './Pages/Admin_pages/AddCatPage';
import AddSubCatPage from './Pages/Admin_pages/AddSubCatPage';
import AddMicroCat from './Pages/Admin_pages/AddMicroCatPage';
import CreateCatForm from './Pages/Admin_pages/CreateCatFormPage';
import EnqryForm from './Pages/EnqryFormPage';
import AdminLogout from './Pages/Admin_pages/Logoutpage.js';
import Viewquery from './Pages/Admin_pages/viewquerypage.js';
import Becomepartner from './Pages/Admin_pages/BecomePartnerPage.js';
import StateList from './Pages/Admin_pages/StateListPage.js';
import CityList from './Pages/Admin_pages/CityListPage.js';
import ShowhideCat from './Pages/Admin_pages/HideshowCatPage.js'; //
import ActOnQuery from './Pages/Admin_pages/ActOnQueryPage.js';
import BecomeCaller from './Pages/Admin_pages/BecomeCallerPage.js';
import BecomeVendor from './Pages/Admin_pages/BecomeVendorPage.js';
import QueryDetails from './Pages/customer_pages/EnquiryDetlsPage.js';
import AgentQuery from './Pages/agentPages/queryPage';
import AgentActOnQuery from './Pages/agentPages/AgentActonQuery.jsx';
const isLoggedIn=localStorage.getItem('username');
const isLoginRole=localStorage.getItem('userole');
let navcontent;
if(isLoginRole==="0"){
  console.log(isLoggedIn);
  navcontent=<AfterloginNavbar/>
}else if(isLoginRole==="3"){
  navcontent=<AgentNav/>
}
else{
  navcontent=<Navbar/> 
}
function App() {
  return (
    <Router>
    {navcontent}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path='/AdminDash' element={<AdminDash />} />
        <Route path='/AddCat' element={<AddCatPage />} />
        <Route path='/AddSubCat' element={<AddSubCatPage />} />
        <Route path='/AddMicroCat' element={<AddMicroCat />} />
        <Route path='/CreateCatForm' element={<CreateCatForm />} />
        <Route path='/EnqryFormPage/:microcatid' element={<EnqryForm />} />
        <Route path='/AdminLogout' element={<AdminLogout />} />
        <Route path='/viewquery' element={<Viewquery />} />
        <Route path='/becomepartner' element={<Becomepartner />} />
        <Route path='/stateList' element={<StateList />} />
        <Route path='/cityList' element={<CityList />} />
        <Route path='/showhideCat' element={<ShowhideCat />} />
        <Route path='/becomeCaller' element={<BecomeCaller />}/>
        <Route path='/becomeVendor' element={<BecomeVendor />} />
        <Route path='/ActOnQuery/:queryid' element={<ActOnQuery />} />
        <Route path='/queryStatus' element={<QueryDetails />} />
        <Route path='/agentQuery' element={<AgentQuery />} />
        <Route path='/agentOnQuery/:queryid/:userId' element={<AgentActOnQuery />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react'
import { useNavigate } from 'react-router-dom';
const AdminLogout = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('username');
    console.log(isLoggedIn);
    localStorage.setItem('username', null);
    localStorage.clear();
    console.log(isLoggedIn);
    //window.location.reload();
    return navigate('/adminlogin');

};

export default AdminLogout;
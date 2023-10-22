import React, { useState, useEffect } from 'react'
import axios from "axios";
import { NavLink, Link} from 'react-router-dom';
const EnqueryDetls = () => {
    const [queryList, setqueryData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/QueryList");
        console.log(response.data);
        setqueryData(response.data);
    };
    const LockData = async (id) => {
        const post = { custid: id }
        console.log(post);
        const response = await axios.post("http://184.168.30.68:5000/lockquery", post);
        console.log(response.data);
        alert('customer query locked!!!');
        window.location.reload();
    };
    useEffect(() => {
        loadData();
    }, []);
    function handleClick(evt) {
       // evt.preventDefault();
        const getqueryID = evt.currentTarget.id;
        console.log(getqueryID);
        LockData(getqueryID);
    }
    return (
        <>
                    <div className='container'>
            <h1>Query Details</h1>
            <div className='row'>
                <div className='row'>
                    <div className='col-md-10'><input type='text' className='form-control' id=''
                    name=''/></div>
                    <div className='col-md-2'><input type='button' id='' name='' /></div>
                </div>
            </div>
            </div>
        </>
    )
};

export default EnqueryDetls;
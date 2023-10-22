import React, { useState, useEffect } from 'react'
import axios from "axios";
import { NavLink, Link} from 'react-router-dom';
const Viewquery = () => {
    const [queryList, setqueryData] = useState([]);
    const loadData = async () => {
        const userid=localStorage.getItem('userid');
        const userrole= localStorage.getItem('userole');
        const post = { userid: userid, userrole:userrole}
        const response = await axios.post("http://184.168.30.68:5000/QueryList",post);
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
            <h1>Query List</h1>
            <div className='rows'>
                <div className='col-md-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Area</th>
                                <th>Approxmete Cost</th>
                                <th>Category</th>
                                <th>query Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queryList.length > 0 && (
                                queryList.map(queryitems => (
                                    <tr>
                                        <td>{queryitems.id}</td>
                                        <td>{queryitems.username}</td>
                                        <td>{queryitems.email}</td>
                                        <td>{queryitems.mobile}</td>
                                        <td>{queryitems.area}</td>
                                        <td>{queryitems.price}</td>
                                        <td>{queryitems.respocatid}</td>
                                        <td>{queryitems.createdOn}</td>
                                        <td>{(queryitems.status>=2)?(<span>Locked query</span>)
                                        :(<Link id={queryitems.id} name={queryitems.id}
                                            className='btn btn-primary btn_design' 
                                            onClick={(e) => handleClick(e)} 
                                            to={'/viewquery'}>Lock</Link>)}
                                             <NavLink href={"/transferquery"} 
                                             className='btn btn-primary'>
                                                Trasfer</NavLink>
                                            <Link to={"/ActOnQuery/"+queryitems.id}
                                             className='btn btn-primary'>View</Link></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Viewquery;
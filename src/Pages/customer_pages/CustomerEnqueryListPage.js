import React, { useState, useEffect } from 'react'
import axios from "axios";
import { NavLink, Link} from 'react-router-dom';
const CustomerEnqueryList = () => {
    const [queryList, setqueryData] = useState([]);
    const { customerid } = useParams();
    const LockData = async () => {
        const post = { userid: customerid }
        console.log(post);
        const response = await axios.post("http://184.168.30.68:5000/CustomerQueryList", post);
        setqueryData(response.data);
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
                                <th>query</th>
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
                                        <td>{queryitems.QUERY}</td>
                                        <td>{queryitems.respocatid}</td>
                                        <td>{queryitems.createdOn}</td>
                                        <td>{(queryitems._status===3)?(<span>Locked query</span>)
                                        :(<Link id={queryitems.id} name={queryitems.id}
                                            className='btn btn-primary btn_design' 
                                            onClick={(e) => handleClick(e)} to={'/viewquery'}>Lock</Link>)}
                                            
                                            <NavLink href={"/transferquery"} className='btn btn-primary'>Trasfer</NavLink>
                                            <Link to={"/ActOnQuery/"+queryitems.id} className='btn btn-primary'>View</Link></td>
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

export default CustomerEnqueryList;
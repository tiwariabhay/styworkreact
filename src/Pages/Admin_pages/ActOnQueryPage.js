import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactIndicator from '../../components/ReactQueryIndicator.jsx'
const ActOnQuery = () => {
  const [queryList, setqueryData] = useState([]);
  const [Engid, setEngid] = useState("");
  const [serviceman, setserviceman] = useState("");
  const[meetDate, SetmeetDate]=useState("");
  const[meettime, setmeettime]=useState("");
  const[meetplace, setmeetplace]=useState("");
  const [QueryStatus, setQueryStatus] = useState("");
  const { queryid } = useParams();
  const loadData = async () => {
    const post = { queryid: queryid }
    const response = await axios.post("http://184.168.30.68:5000/OneProQuery", post);
    console.log(response.data);
    setQueryStatus(response.data[0].status);
    setqueryData(response.data);
    //setQueryStatus(queryList[0]._status);
  };
  const loadServiceEngData = async () => {
    const response = await axios.get("http://184.168.30.68:5000/getpartnerList");
    console.log(response.data);
    setserviceman(response.data);
  };

  const submitThis = async (e) => {
    const post = {engid:Engid,queryid:queryid,meetDate:meetDate,meettime:meettime,meetplace:meetplace }
      console.log(post);
    try {
      const res = await axios.post('http://184.168.30.68:5000/Savemeeting', post)
      console.log(res);
      // if(res.data[0].result==="done"){
alert('Service engineer Assigned Successfully!!!!');
window.location.reload();
      // }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadData();
    console.log(QueryStatus);
    loadServiceEngData();
  }, []);
  const handleClickEvent = (event) => {
    event.preventDefault();
    submitThis();
  }
  return (
    <>
      <div className='container'>
        <div className='panel-group'>
          <div className='panel panel-info'>
            <div className='panel-head'>
              <h1>Query Details</h1>
            </div>
            <div className='panel-body'>
              <div className='row'>
                {/* Order Tracker */}
                <div className='col-md-6'>
                  <ReactIndicator indicatorLevel={QueryStatus}/>
                </div>
                {/* Query Container */}
                <div className='col-md-6'>
                  {/* Customer query details */}
                  <table className='table table-stripped table-bordered'><tbody>
                    {queryList.length > 0 && (
                      queryList.map(queryitems => (
                        <>
                          <tr><td>Customer Name:</td><td>{queryitems.username}</td></tr>
                          <tr><td>Customer Mobile:</td><td>{queryitems.mobile}</td></tr>
                          <tr><td>Customer Email:</td><td>{queryitems.email}</td></tr>
                          <tr><td>Customer Assumed Area:</td><td>{queryitems.area}</td></tr>
                          <tr><td>Area base price:</td><td>&#8377; {queryitems.price}/-</td></tr>
                          <tr><td>Customer Category:</td><td>{queryitems.respocatid}</td></tr>
                          <tr><td>Customer Status:</td><td>{queryitems.status}</td></tr></>
                      )))}</tbody></table>
                  {/* service man assign or status  */}
                  <h2>Admin Action</h2>
                  <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        Assign Consultent/Service Engineer
                        <select name="mainServId" className="form-control" id="mainServId"
                          required onChange={(e) => setEngid(e.target.value)}>
                          <option>Select Service Man</option>
                          {serviceman.length > 0 && (
                            serviceman.map(service_man => (
                              <option value={service_man.id}>{service_man.fullname}</option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group  text-left">
                        <label>Meeting Date</label>
                        <input type="date" name="mainServId" className="form-control" id="mainServId"
                          required onChange={(e) => SetmeetDate(e.target.value)} />
                      </div>
                      <div className="col-md-12 form-group  text-left">
                        <label>Meeting time</label>
                        <input type="time" name="servicename" className="form-control" id="servicename"
                          required onChange={(e) => setmeettime(e.target.value)} />
                      </div>
                      <div className="col-md-12 form-group text-left">
                        <label>Place of meeting</label>
                        <input type="text" name="servicename" className="form-control" id="servicename"
                          required onChange={(e) => setmeetplace(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-12 text-center p-3">
                      <button type="submit" onClick={handleClickEvent} className='btn btn-primary btn_design'>Submit</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActOnQuery;
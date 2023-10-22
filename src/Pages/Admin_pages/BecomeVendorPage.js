import React, { useState } from 'react'
import axios from "axios";
const BecomeVendor = () => {
  const [mainServId, SetmainServId] = useState("");
  const [servicename, setservicename] = useState("");
  const submitThis = async (e) => {
    console.log(servicename);
    const post = { servicename: servicename, mainServId: mainServId }
    try {
      const res = await axios.post('http://184.168.30.68:5000/SavesubCat', post)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const handleClickEvent = (event) => {
    event.preventDefault();
    submitThis();
  }
  return (
    <>
      <div className='col-md-12 cat_design'>
        <h1>Become our vendor</h1>
        <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
          <div className="row">
            <div className="col-md-12 form-group">
              Full Name
              <input type="text" name="mainServId" className="form-control" id="mainServId"
                required onChange={(e) => SetmainServId(e.target.value)} />
            </div>
            <div className="col-md-12 form-group">
              Mobile Number
              <input type="text" name="servicename" className="form-control" id="servicename"
                required onChange={(e) => setservicename(e.target.value)} />
            </div>
            <div className="col-md-12 form-group">
              Name of shop
              <input type="text" name="servicename" className="form-control" id="servicename"
                required onChange={(e) => setservicename(e.target.value)} />
            </div>
            <div className="col-md-12 form-group">
              Work Area
              <input type="text" name="servicename" className="form-control" id="servicename"
                required onChange={(e) => setservicename(e.target.value)} />
            </div>
            <div className="col-md-12 form-group">
              Select Material you are sell
              <select id='id_proof_type' name='id_proof_type' className='form-control'
                required onChange={(e) => setservicename(e.target.value)}>
                <option value={0}> Select One</option>
                <option value={1}> Pan Card</option>
                <option value={2}> Voter Card</option>
                <option value={3}> Drivaring Licence</option></select>
            </div>
          </div>
          <div className="col-md-12 text-center p-3">
            <button type="submit" onClick={handleClickEvent} className='btn btn-primary btn_design'>Submit</button></div>
        </form>
      </div>
    </>
  );
};

export default BecomeVendor;
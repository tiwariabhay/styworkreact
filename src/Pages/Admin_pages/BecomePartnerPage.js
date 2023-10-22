import React, { useState } from 'react'
import axios from "axios";
const Becomepartner = () => {
  const [fullname, Setfullname] = useState("");
  const [mobile, setmobile] = useState("");
  const [workexp, setworkexp] = useState("");
  const [workarea, setworkarea] = useState("");
  const [pastcomp, setpastcomp] = useState("");
  const [idproof, setidproof] = useState("");
  // const [uploaddoc, setuploaddoc] = useState("");
  const submitThis = async (e) => {
    const post = { fullname: fullname, mobile: mobile,workexp:workexp,workarea:workarea,
      pastcomp:pastcomp,idproof:idproof}
      console.log(post);
    try {
      const res = await axios.post('http://184.168.30.68:5000/SavePartnerData', post)
      if(res.statusText==="OK"){
        alert('your service engineer/ worker add successfully!!!');
        window.location.reload();
      }
      else{
        alert('something wrong!!!!');
      }
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
      <div className='container'>
        <div className='col-md-12 commanform'>
          <h1>Join Us</h1>
          <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
            <div className="row">
              <div className="col-md-6 form-group">
                Full Name
                <input type="text" name="mainServId" className="form-control" id="mainServId"
                  required onChange={(e) => Setfullname(e.target.value)} />
              </div>
              <div className="col-md-6 form-group">
                Mobile Number
                <input type="text" name="servicename" className="form-control" id="servicename"
                  required onChange={(e) => setmobile(e.target.value)} />
              </div>
              <div className="col-md-6 form-group">
                Work experince
                <input type="text" name="servicename" className="form-control" id="servicename"
                  required onChange={(e) => setworkexp(e.target.value)} />
              </div>
              <div className="col-md-6 form-group">
                Work Area
                <input type="text" name="servicename" className="form-control" id="servicename"
                  required onChange={(e) => setworkarea(e.target.value)} />
              </div>
              <div className="col-md-6 form-group">
                Past Company Name
                <input type="text" name="servicename" className="form-control" id="servicename"
                  required onChange={(e) => setpastcomp(e.target.value)} />
              </div>
              <div className="col-md-6 form-group">
                ID Proof Type
                <select id='id_proof_type' name='id_proof_type' className='form-control'
                  required onChange={(e) => setidproof(e.target.value)}>
                  <option value={0}> Select One</option>
                  <option value={1}> Pan Card</option>
                  <option value={2}> Voter Card</option>
                  <option value={3}> Drivaring Licence</option></select>
              </div>
              {/* <div className="col-md-6 form-group">
                Upload ID Proof
                <input type="file" name="IdProof" className="form-control" id="servicename"
                  required onChange={(e) => setuploaddoc(e.target.value)} />
              </div> */}
            </div>
            <div className="col-md-12 text-center p-3">
              <button type="submit" onClick={handleClickEvent}
               className='btn btn-primary btn_design'>Submit</button></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Becomepartner;
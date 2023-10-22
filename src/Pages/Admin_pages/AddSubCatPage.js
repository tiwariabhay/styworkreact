import React, { useState, useEffect } from 'react'
import axios from "axios";
const AddSubCatPage = () => {
  const [mainServId, SetmainServId] = useState("");
  const [servicename, setservicename] = useState("");
  const [mainCatData, setmainCatData] = useState([]);
  const loadCatData = async () => {
    const response = await axios.get("http://184.168.30.68:5000/catlist");
    setmainCatData(response.data);
  };
  const submitThis = async (e) => {
    console.log(servicename);
    const post = { servicename: servicename, mainServId: mainServId }
    //console.log(post);
    try {
      const res = await axios.post('http://184.168.30.68:5000/SavesubCat', post)
      if(res.statusText==="OK"){
        alert('New Sub Category Created successfully!!!!');
        window.location.reload();
      }
    } catch (e) {
    if(e.response.status===409){
      alert('Sub Category already created!!!!');
      window.location.reload();
    }else{
      alert('Some thing Wrong!!!!');
      window.location.reload();  
  }
    }
  }
  useEffect(() => {
    loadCatData();
  }, []);
  const handleClickEvent = (event) => {
    event.preventDefault();
    submitThis();
  }
  return (
    <>
      <div className='col-md-12 cat_design'>
        <h1>Add New Sub Category</h1>
        <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
          <div className="row">
            <div className="col-md-12 form-group">
              Select Service
              <select className='form-control' onChange={(e) => SetmainServId(e.target.value)}>
                <option>Select Category</option>
                {mainCatData.length > 0 && (
                  mainCatData.map(mainCat => (
                    <option value={mainCat.id}>{mainCat.catname}</option>
                  ))
                )}
              </select>
            </div>
            <div className="col-md-12 form-group">
              Enter sub-service Name
              <input type="text" name="servicename" className="form-control" id="servicename"
                required onChange={(e) => setservicename(e.target.value)} />
            </div>
          </div>
          <div className="col-md-12 text-center p-3">
            <button type="submit" onClick={handleClickEvent} className='btn btn-primary btn_design'>Submit</button></div>
        </form>
      </div>
    </>
  );
};

export default AddSubCatPage;
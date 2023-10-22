import React, {useState} from 'react'
import axios from "axios";
const AddCatPage = () => {
    const [servicename,setservicename]=useState(""); 
const submitThis = async (e) => {
    console.log(servicename);
  const post = { servicename: servicename }
  try {
    const res = await axios.post('http://184.168.30.68:5000/SaveCat', post)
    console.log(res.statusText);
    console.log(res.status);
    if(res.statusText==="OK"){
      alert('New Category Created successfully!!!!');
      window.location.reload();
    }

    //else if(res.statusText==="OK"){}
  } catch (e) {
  if(e.response.status===409){
    alert('Category already created!!!!');
    window.location.reload();
  }else{
    alert('Some thing Wrong!!!!');
    window.location.reload();  
}
  }
}

const handleClickEvent = (event) => {
  event.preventDefault();
  submitThis();
}
    return (
      <>
        <div className='col-md-12 cat_design'>
            <h1>Add New Service</h1>
            <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
              <div className="row">
                <div className="col-md-12 form-group">
                  Enter Service Name
                  <input type="text" name="servicename" className="form-control" id="servicename" 
                  required onChange={(e)=>setservicename(e.target.value)}/>
                </div>
              </div>        
              <div className="col-md-12 text-center p-3">
                <button type="submit" onClick={handleClickEvent} 
                className='btn btn-primary btn_design'>Submit</button></div>
            </form>
        </div>
        </>
    );
};
 
export default AddCatPage;
import React, {useState,useEffect} from 'react'
import axios from "axios";
const CreateCatForm = () => {
    const [FieldLabel,setFieldLabel]=useState(""); 
    const [FieldCat,setFieldCat]=useState(""); 
    const [FieldType,setFieldType]=useState(""); 
    const [MicrocatList,setMicrocatList]=useState("");
    const [RespoId,setRespoId]=useState("");
    const loadCatData = async () => {
      const response = await axios.get("http://184.168.30.68:5000/microlist");
      console.log(response.data);
      setMicrocatList(response.data);
    }; 
const submitThis = async (e) => {
  const post = { FieldLabel: FieldLabel,FieldCat:FieldCat,FieldType:FieldType,RespoId:RespoId}
  try {
    const res = await axios.post('http://184.168.30.68:5000/SaveCatformdesign', post)
    console.log(res.statusText);
    console.log(res.status);
    if(res.statusText==="OK"){
      alert('New Form Field Created successfully!!!!');
      window.location.reload();
    }

    //else if(res.statusText==="OK"){}
  } catch (e) {
    console.log(e);
    alert('something wrong!!!!');
    window.location.reload();
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
        <div className='col-md-12 commanform'>
            <h1>Create Service Form</h1>
            <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
              <div className="row">
                <div className="col-md-6 form-group">
                Enter Field Label Name
                  <input type="text" name="FieldLabel" className="form-control" id="FieldLabel" 
                  required onChange={(e)=>setFieldLabel(e.target.value)}/>
                </div>
                <div className="col-md-6 form-group">
                Enter Field Category
                <select name="FieldCat" className="form-control" id="FieldCat"  
                onChange={(e)=>setFieldCat(e.target.value)} required>
                  <option>Select Category</option>
                  <option value='input'>inputField</option>
                </select>
                </div>
                <div className="col-md-6 form-group">
                Enter Field Type
                   <select name="FieldCat" className="form-control" id="FieldCat" 
                    onChange={(e)=>setFieldType(e.target.value)} required>
                  <option>Select Category</option>
                  <option value='text'>Text</option>
                  <option value='tel'>Tel no</option>
                  <option value='email'>email</option>
                  <option value='radio'>radio</option>
                  <option value='number'>number</option>
                  <option value='checkbox'>checkbox</option>
                </select>
                </div>
                <div className="col-md-6 form-group">
                Select Micro Category
                <select name="RespoId" className="form-control" id="RespoId" 
                required onChange={(e)=>setRespoId(e.target.value)}>
                  <option>Select Micro Category</option>
                  {MicrocatList.length > 0 && (
                  MicrocatList.map(mainCat => (
                    <option value={mainCat.id}>{mainCat.microcatname}</option>
                  ))
                )}
                </select>
                </div>
              </div>        
              <div className="col-md-12 text-center p-3">
                <button type="submit" onClick={handleClickEvent} className='btn- btn-primary btn_design'>Submit</button></div>
            </form>
        </div>
        </>
    );
};
 
export default CreateCatForm;
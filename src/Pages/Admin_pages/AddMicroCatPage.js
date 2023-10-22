import React, { useState, useEffect } from 'react'
import axios from "axios";
const AddMicroCat = () => {
    const [servicename, setservicename] = useState("");
    const [mainServId, setmainServId] = useState("");
    const [SubServId, setSubServId] = useState("");
    const [mainCatData, setmainCatData] = useState([]);
    const [SubCatData, setSubCatData] = useState([]);
    const loadCatData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/catlist");
        setmainCatData(response.data);
    };
    const loadSubCatData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/Subcatlist");
        setSubCatData(response.data);
    };
    const submitThis = async (e) => {
        console.log(servicename);
        const post = { mainServId: mainServId, SubServId: SubServId, servicename: servicename, }
        try {
            const res = await axios.post('http://184.168.30.68:5000/SavemicroCat', post)
            console.log(res.statusText);
            console.log(res.status);
            if (res.statusText === "OK") {
                alert('New Category Created successfully!!!!');
                window.location.reload();
            }

            //else if(res.statusText==="OK"){}
        } catch (e) {
            if (e.response.status === 409) {
                alert('Category already created!!!!');
                window.location.reload();
            }
            else{
                alert('Some thing Wrong!!!!');
                window.location.reload();  
            }
        }
    }
    useEffect(() => {
        loadCatData();
        loadSubCatData();
    }, []);
    const handleClickEvent = (event) => {
        event.preventDefault();
        submitThis();
    }
    return (
        <>
            <div className='col-md-12 cat_design'>
                <h1>Add New Micro Service</h1>
                <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            Select Main Category
                            <select className='form-control' onChange={(e) => setmainServId(e.target.value)}>
                                <option>Select Category</option>
                                {mainCatData.length > 0 && (
                                    mainCatData.map(mainCat => (
                                        <option value={mainCat.id}>{mainCat.catname}</option>
                                    ))
                                )}
                            </select>
                        </div>
                        <div className="col-md-12 form-group">
                            Select Sub-Category Name
                            <select className='form-control' onChange={(e) => setSubServId(e.target.value)}>
                                <option>Select Sub-Category</option>
                                {SubCatData.length > 0 && (
                                    SubCatData.map(SubCat => (
                                        <option value={SubCat.id}>{SubCat.subcatname}</option>
                                    ))
                                )}
                            </select>
                        </div>
                        <div className="col-md-12 form-group">
                            Enter Micro Category Name
                            <input type="text" name="servicename" className="form-control" id="servicename"
                                required onChange={(e) => setservicename(e.target.value)} />
                        </div>
                    </div>
                    <div className=" col-md-12 text-center p-3">
                        <button type="submit" onClick={handleClickEvent} className='btn btn-primary btn_design'>Submit</button></div>
                </form>
            </div>
        </>
    );
};

export default AddMicroCat;
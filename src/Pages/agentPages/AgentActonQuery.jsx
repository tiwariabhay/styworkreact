import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactIndicator from '../../components/ReactQueryIndicator.jsx'
const AgentActOnQuery = () => {
    const [queryList, setqueryData] = useState([]);
    const [QueryStatus, setQueryStatus] = useState("");
    const [area, setArea] = useState("");
    const [price, setPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [, setCondition] = useState("");
    const { queryid } = useParams("");
    const { userId } = useParams("");
    console.log(userId);
    const loadData = async () => {
        const post = { queryid: queryid }
        const response = await axios.post("http://184.168.30.68:5000/OneProQuery", post);
        console.log(response.data);
        setQueryStatus(response.data[0].status);
        setqueryData(response.data);
    };
    const GenerateThis=async(e)=>{
       // const post = { engid: userId, queryid: queryid }
        //console.log(post);
        try {
            const res = await axios.get('http://184.168.30.68:5000/generatePDF')
            console.log(res);
            // if(res.data[0].result==="done"){
            alert('Service engineer Assigned Successfully!!!!');
            window.location.reload();
            // }
        } catch (e) {
            console.log(e);
        }
    }
    const sendmail=async(e)=>{
        // const post = { engid: userId, queryid: queryid }
         //console.log(post);
         try {
             const res = await axios.get('http://184.168.30.68:5000/sendemailtoClient')
             console.log(res);
             // if(res.data[0].result==="done"){
             alert('mail Send Successfully!!!!');
             window.location.reload();
             // }
         } catch (e) {
             console.log(e);
         }
     }
    const submitThis = async (e) => {
        const post = { engid: userId, queryid: queryid, area: area, cost: price, totcost: totalPrice }
        console.log(post);
        try {
            const res = await axios.post('http://184.168.30.68:5000/saveupdatedPrice', post)
            console.log(res);
            // if(res.data[0].result==="done"){
            alert('Service engineer Assigned Successfully!!!!');
            window.location.reload();
            // }
        } catch (e) {
            console.log(e);
        }
    }
    function getTotalprice(val) {
        console.log(val);
        const loadPriceDataData = async () => {
            const post = { respoid: queryid, areaval: area, conditioval: val }
            console.log(post);
            const response = await axios.post("http://184.168.30.68:5000/getareacostbyquery", post);
            console.log(response.data);
            var price = response.data[0].cost;
            console.log(price);
            console.log(area);
            var totalCost = price * area;
            console.log(totalCost);
            setPrice(price);
            setTotalPrice(totalCost);
            setCondition(val);
        };
        loadPriceDataData();
    }
    useEffect(() => {
        loadData();
        console.log(QueryStatus);
    }, []);
    const handleClickEvent = (event) => {
        event.preventDefault();
        submitThis();
    }
    const handleClickGenEvent=(event)=>{
        event.preventDefault();
        GenerateThis();
        sendmail();
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
                                    <ReactIndicator indicatorLevel={QueryStatus} />
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
                                    <h2>Agent Action</h2>
                                    {(QueryStatus === 5) ? (
                                        <> <div className='col-md-12'><button type="submit" id="btn_enqury" className='btn btn-success btn_design'
                                            onClick={handleClickGenEvent} >
                                            Generate Quatation</button></div></>
                                    ) : ((QueryStatus === 6) ? (<>Send for athority approval</>)
                                        : ((QueryStatus === 7) ? (<>
                                        <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
                                            <div className="row">
                                                <div className="col-md-8 form-group">
                                                    One Time Password
                                                    <input type="number" name="area"
                                                        className="form-control" id="area" required
                                                        onChange={(e) => setArea(e.target.value)} />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                <button type="submit" id="btn_enqury" className='btn btn-success btn_design'
                                                    onClick={handleClickEvent} >
                                                    Send OTP for Approval</button>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" id="btn_enqury" className='btn btn-success btn_design'
                                                    onClick={handleClickEvent} >
                                                    Submit Final Area</button>
                                            </div>
                                        </form></>)
                                            : (<><form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
                                                <div className="row">
                                                    <div className="col-md-12 form-group">
                                                        Area(in sqft)
                                                        <input type="number" name="area"
                                                            className="form-control" id="area" required
                                                            onChange={(e) => setArea(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    Condition
                                                    <select id='fal_cel_cond' name='fal_cel_cond' className='form-control'
                                                        onChange={(e) => getTotalprice(e.target.value)}>
                                                        <option>Select Condition</option>
                                                        <option value="only celling">only Celling</option>
                                                        <option value="wall and celling">wall and celling</option>
                                                    </select>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        cost per sqft Area
                                                        <input type="number" name="costperarea"
                                                            className="form-control" id="costperarea" value={price} /></div>
                                                    <div className='col-md-6'>
                                                        Final Price<input type="number" name="setPrice"
                                                            className="form-control" id="setPrice" value={totalPrice} /></div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" id="btn_enqury" className='btn btn-success btn_design'
                                                        onClick={handleClickEvent} >
                                                        Submit Final Area</button>
                                                </div>
                                            </form></>)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgentActOnQuery;
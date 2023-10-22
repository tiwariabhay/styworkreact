import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const EnqryForm = () => {
    const [subCat, setubCatData] = useState([]);
    const [name, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [area, setArea] = useState();
    const [price, setPrice] = useState();
    const [totalPrice, setTotalPrice]=useState();
    const [condition, setCondition]=useState();
    const { microcatid } = useParams();
    const navigate = useNavigate();
    const loadData = async () => {
        const post = { microcatid: microcatid }
        const response = await axios.post("http://184.168.30.68:5000/reqform", post);
        console.log(response.data);
        setubCatData(response.data);
    };
    const savequery = async (e) => {
        try {
            const postSaveData = {
                microcatid: microcatid, custname: name, custMobile: mobile,
                custEmail: email, custArea: area, custPrice: totalPrice, CustCondition:condition
            }
            console.log(postSaveData);
            await axios.post('http://184.168.30.68:5000/savequery', postSaveData)
             alert('Data Store successfully!!!!!!');
            return navigate('/');
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        loadData();
    }, []);
    const handleClickEvent = () => {
        savequery();
    }
    function handleChange(evt) {
        const name = evt.target.name;
        if (name === 'Name') {
            setUsername(evt.target.value);
        }
        else if (name === 'Email') {
            setEmail(evt.target.value);
        }
        else if (name === 'Mobile') {
            setMobile(evt.target.value);
        }
        else if (name === 'Area') {
            setArea(evt.target.value);

        }

    }
    function getTotalprice(val){
        const loadPriceDataData = async () => {
            const post = { respoid: microcatid,areaval:area, conditioval:val  }
            console.log(post);
            const response = await axios.post("http://184.168.30.68:5000/getareacost", post);
            console.log(response.data);
            var price= response.data[0].cost;
            console.log(price);
            console.log(area);
            var totalCost= price*area;
            console.log(totalCost);
             setPrice(price);
             setTotalPrice(totalCost);
             setCondition(val);
        };
        loadPriceDataData();
    }
    return (
        <>
            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Enqury Form</h2>
                        <h3>Fill our <span>Form</span></h3>
                        <p>Please provie basic details with your query. We contact you shortlly.</p>
                    </div>
                    <div className='row cat_design'>
                        <form action="" method="post" role="form" className="php-email-form" onSubmit={savequery}>
                            {subCat.length > 0 && (
                                <div className="row">
                                    {subCat.map(formitems => (
                                        <>
                                            <div className="col-md-12 form-group">
                                                {formitems.labelName}
                                                {<input type={formitems.fieldType} name={formitems.labelName}
                                                    className="form-control" id={formitems.id} required
                                                    onChange={handleChange} />}
                                            </div>
                                        </>
                                    ))}
                                    <div className='col-md-12'>
                                        Condition 
                                        <select id='fal_cel_cond' name='fal_cel_cond' className='form-control' 
                                        onChange={(e)=>getTotalprice(e.target.value)}>
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
                                        <button type="submit" id="btn_enqury" className='btn btn-success btn_design' onClick={handleClickEvent}>
                                            Submit query</button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- End Services Section --> */}
        </>
    );
};

export default EnqryForm;
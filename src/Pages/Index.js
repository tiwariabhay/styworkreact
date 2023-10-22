import React, {useState, useEffect} from 'react';
  import {Link} from "react-router-dom";
 import axios from "axios";
const Home = () => {
    const [users,setData]=useState([]);
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);
    const [Cates,setCates]=useState([]);
    const [stateid,setstateid]=useState([]);
    const [cityid,setcityid]=useState([]);
    const [catid,setcatid]=useState([]);

    const loadData = async()=>{
        const response= await axios.get("http://184.168.30.68:5000/cat1");
        setData(response.data);
    };
    const loadStates = async()=>{
      const response= await axios.get("http://184.168.30.68:5000/statelist");
      setStates(response.data);
  };
  const loadCities = async(e)=>{
    setstateid(e.target.value);
    const post={stateid:e.target.value};
    const response= await axios.post("http://184.168.30.68:5000/citylist",post);
    setCities(response.data);
};
const loadCat = async()=>{
  const response= await axios.get("http://184.168.30.68:5000/catlist");
  setCates(response.data);
};
const loadSearchData = async()=>{
  if (stateid.length === 0) {
alert('Please select One State');
  }
  else{var post=[];
    if (cityid.length === 0 &&catid.length === 0) {post={stateid:stateid, cityid: 0, catid:0};}
    if (cityid.length !== 0 &&catid.length === 0) { post={stateid:stateid, cityid: cityid, catid:0};}
    if (cityid.length === 0 &&catid.length !== 0) { post={stateid:stateid, cityid: 0, catid:catid};}
    if (cityid.length !== 0 &&catid.length !== 0) { post={stateid:stateid, cityid: cityid, catid:catid};}
    console.log(post);
    const response= await axios.post("http://184.168.30.68:5000/searchData",post);
    console.log(response.data);
    setData(response.data);
    //setCates(response.data);
  }
};
const submitSearch=(evt)=>{
  loadSearchData();
}
    useEffect(()=>{
        loadData();
        loadStates();
        loadCat();
    },[]);
      const handleTypeSelect = (event) => {
        console.log(event.target.value);
        loadCities(event);
      };
    return (
     <>
     {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services padding0">
      <div className="container-flud" data-aos="fade-up">
        <div className="row serch_boxCont">
          <div className='col-md-2'></div>
          <div className='col-md-8 search_box'>
<div className='row'>
  <div className='col-md-12'>
    <h1>Search Service on "STY WORK"</h1>
  </div>
  <div className='col-md-4 text-center'><p>Select State</p> 
  <select className='form-control'   onChange={(e)=>handleTypeSelect(e)}>
    <option value={'0'}>Select State Name</option>
  {states.length>0&& (
     states.map(state => (
<option value={state.id}>{state.statename}</option>
     ))
  )}
  </select>
  </div>
  <div className='col-md-4 text-center'><p>Select City</p>
  <select className='form-control' onChange={(e)=>setcityid(e.target.value)}>
    <option value={'0'}>Select City Name</option>
  {cities.length>0&& (
     cities.map(city => (
<option value={city.id}>{city.cityname}</option>
     ))
  )}
  </select>
  </div>
  <div className='col-md-4 text-center'><p>Select Service</p>
  <select className='form-control'onChange={(e)=>setcatid(e.target.value)}>
    <option value={'0'}>Select Service Name</option>
  {Cates.length>0&& (
     Cates.map(cat => (
<option value={cat.id}>{cat.catname}</option>
     ))
  )}
  </select></div>
</div>
<div className='col-md-12 text-center p-3'>
<button type="submit" className='btn btn-primary btn_design' onClick={(e)=>submitSearch(e)}>Search</button>
</div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </section>
         {/* <!-- ======= main Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <h3>Check our <span>Services</span></h3>
          <p>services discription</p>
        </div>
{users.length > 0 && (
        <div className="row">
          {users.map(user => (
          <>
          <div className="col-md-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
            <h2>{<Link to={'/EnqryFormPage/'+user.id} key={user.id}>{user.microcatname}</Link>}</h2>       
              <h3>{user.subcatname}</h3>
              <h5>{user.catname}</h5>
            </div>
          </div>
          </>
          ))}
        </div>
)}
      </div>
    </section>
    {/* <!-- End Services Section --> */}
        {/* <!-- ======= Trending Services Section ======= --> */}
        <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Tranding Service</h2>
        </div>
        <div className="row">
          
        </div>
      </div>
    </section>
    {/* <!-- End Services Section --> */}
     </>
    );
};
 
export default Home;
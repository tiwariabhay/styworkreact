import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Adminlogin = () => {
  const [username,setUsername]=useState(""); 
  const [users,setData]=useState([]);
  const navigate = useNavigate();
const [passw,setPassw]=useState(""); 
const submitThis = async (e) => {
  const post = { username: username }
  try {
    const res = await axios.post('http://184.168.30.68:5000/adminLogin', post)
    console.log(res.data);
    setData(res.data);
    const username= users[0].username;
    const userole= users[0].role;
    const userid= users[0].userid;
    console.log(users[0].username);
    console.log(userole);
    console.log(userid);
    localStorage.setItem('username',username ); //changed
    localStorage.setItem('userole',userole ); //changed
    localStorage.setItem("userid",userid);
    window.location.reload(false);
    return navigate('/AdminDash');
  } catch (e) {
  console.log(e);
  }
}
// useEffect(()=>{
//   submitThis();
// },[]);
const handleClickEvent = (event) => {
  event.preventDefault();
  submitThis();
}
    return (
      <>
        <div className='col-md-12 cat_design'>
            <h1>Login Page</h1>
            <form action="" method="post" role="form" className="php-email-form" onSubmit={submitThis}>
              <div className="row">
                <div className="col-md-12 form-group">
                  User Name or email Id
                  <input type="text" name="username" className="form-control" id="username" 
                  placeholder="Enter User Name" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="col-md-12 form-group">
                  Password
                  <input type="password" className="form-control" name="passw" id="passw" 
                  placeholder="Enter your password" required value={passw} onChange={(e)=>setPassw(e.target.value)}/>
                </div>
              </div>        
              <div className="col-md-12 text-center p-3">
                <button type="submit" onClick={handleClickEvent} className='btn btn-primary btn_design'>Login</button></div>
            </form>
        </div>
        </>
    );
};
 
export default Adminlogin;
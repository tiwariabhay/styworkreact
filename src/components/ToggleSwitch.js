import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {
    const handleChange = (evt) => {
        const toggalvalue=evt.target.value;
        const toggleid= evt.target.id;
        console.log(toggleid);
        console.log(evt.target.value);
        if(toggalvalue==="on"){
           // postRespo(toggalvalue);
           
        }
        else{

        }
    }
    return (
        <div className="container">
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} onChange={handleChange}/>
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;
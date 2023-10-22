import React, {useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import axios from "axios";
const CityList = () => {
    const [_cityList, setCityData] = useState([]);
    const [checked, setChecked] = useState(true);
    const loadData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/allcitylist");
        console.log(response.data);
        setCityData(response.data);
    };
      
        const handleChange = val => {
          setChecked(val)
        }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h1>City List</h1>
            <div className='rows'>
                <div className='col-md-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>City Name</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_cityList.length > 0 && (
                                _cityList.map(_cityitems => (
                                    <tr>
                                        <td>{_cityitems.id}</td>
                                        <td>{_cityitems.cityname}</td>
                                        <td>{_cityitems.status}</td>
                                        <td><ReactSwitch
        checked={checked}
        onChange={handleChange}
      /></td></tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default CityList;
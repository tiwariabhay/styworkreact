import React, {useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import axios from "axios";
const ShowhideCat = () => {
    const [_catList, CatData] = useState([]);
    const [checked, setChecked] = useState(true);
    const loadData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/catlist");
        console.log(response.data);
        CatData(response.data);
    };
      
        const handleChange = val => {
          setChecked(val)
        }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h1>Category List</h1>
            <div className='rows'>
                <div className='col-md-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Category Name</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_catList.length > 0 && (
                                _catList.map(catitems => (
                                    <tr>
                                        <td>{catitems.id}</td>
                                        <td>{catitems.catname}</td>
                                        <td>{catitems.status}</td>
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

export default ShowhideCat;
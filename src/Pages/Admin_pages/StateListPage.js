import React, {useState, useEffect } from 'react';
import axios from "axios";
import ToggleSwitch from "../../components/ToggleSwitch";
const StateList = () => {
    const [_stateList, setStateData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://184.168.30.68:5000/statelist");
        console.log(response.data);
        setStateData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <h1>State List</h1>
            <div className='rows'>
                <div className='col-md-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>State Name</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_stateList.length > 0 && (
                                _stateList.map(_stateitems => (
                                    <tr>
                                        <td>{_stateitems.id}</td>
                                        <td>{_stateitems.statename}</td>
                                        <td>{_stateitems.status}</td>
                                        <td> <ToggleSwitch label={_stateitems.id} /></td></tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default StateList;
import React from "react";
import './ReactQueryIndicator.css';
const ReactIndicator=({indicatorLevel})=>{
    console.log(indicatorLevel);

return(
    <ul className='step_prog'>
    <li>
      <div className='circle cross'></div>
      <span className='text_lable'>Raise Query</span>
    </li>
    <li>
    {(indicatorLevel===2)?(
        <>
      <div className='circle _active'></div>
      <span className='text_lable'>Lock By Caller</span></>
    ):((indicatorLevel>2)?( <>
      <div className='circle cross'></div>
      <span className='text_lable'>Lock By Caller</span></>
    ):( <>
      <div className='circle'></div>
      <span className='text_lable'>Lock By Caller</span></>   
    ))}
    </li>
    <li> 
      {(indicatorLevel===3)?(
        <>
    <div className='circle _active'></div>
      <span className='text_lable'>Assign Service Engineer or visitor</span></>
    ):((indicatorLevel>3)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Assign Service Engineer or visitor</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Assign Service Engineer or visitor</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===4)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Query Lock By Visitor</span></>
    ):((indicatorLevel>4)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Query Lock By Visitor</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Query Lock By Visitor</span></>   
    ))}
    </li>
    {/* <li>
      {(indicatorLevel===5)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Visitor Reach location</span></>
    ):((indicatorLevel>5)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Visitor Reach location</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Visitor Reach location</span></>   
    ))}
    </li> */}
    <li>
      {(indicatorLevel===5)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Visit Completed</span></>
    ):((indicatorLevel>5)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Visit Completed</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Visit Completed</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===6)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Quatation generate and send for approval</span></>
    ):((indicatorLevel>6)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Quatation generate and send for approval</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Quatation generate and send for approval</span></>   
    ))}
    </li>
    {(indicatorLevel!==14)?(
    <><li>
      {(indicatorLevel===7)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Quatation Approved by Client</span></>
    ):((indicatorLevel>7)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Quatation Approved by Client</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Quatation Approved by Client</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===8)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Waiting for token payment</span></>
    ):((indicatorLevel>8)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Waiting for token payment</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Waiting for token payment</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===9)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Work in progress</span></>
    ):((indicatorLevel>9)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Work in progress</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Work in progress</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===10)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Work Done</span></>
    ):((indicatorLevel>10)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Work Done</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Work Done</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===11)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Final Payment Done</span></>
    ):((indicatorLevel>11)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Final Payment Done</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Final Payment Done</span></>   
    ))}
    </li>
    <li>
      {(indicatorLevel===12)?(
        <>
   <div className='circle _active'></div>
      <span className='text_lable'>Query Closed</span></>
    ):((indicatorLevel>12)?( <>
        <div className='circle cross'></div>
      <span className='text_lable'>Query Closed</span></>
    ):( <>
     <div className='circle'></div>
      <span className='text_lable'>Query Closed</span></>   
    ))}
    </li>
    </>):(<li>
        <>
   <div className='circle'></div>
      <span className='text_lable'>Quatation Reject By Client</span></>
    </li>)} 
  </ul>
);
};
export default ReactIndicator;
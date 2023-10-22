// import React from "react";
// import { NavLink } from "react-router-dom";
// const  getTotalprice=(val){
//         const loadPriceDataData = async () => {
//             const post = { respoid: microcatid,areaval:area, conditioval:val  }
//             console.log(post);
//             const response = await axios.post("http://184.168.30.68:5000/getareacost", post);
//             console.log(response.data);
//             var price= response.data[0].cost;
//             console.log(price);
//             console.log(area);
//             var totalCost= price*area;
//             console.log(totalCost);
//              setPrice(price);
//              setTotalPrice(totalCost);
//              setCondition(val);
//         };
//         loadPriceDataData();
//     }
//   return (
// <input type="number" name="CalPrice" id="CalPrice" value={getTotalprice}/>
//   );
// };

// export default AgentNav;
import React from "react";
import Sidebar from "../Components/Sidebar";
import bg from  "../Assets/bg1.jpg"
 
const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <img src={bg}/>
      
    </div>
  );
};

export default Homepage;

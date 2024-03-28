import React from "react";
import Sidebar from "../Components/Sidebar";
import bg from "../Assets/bg1.jpg";
import Navbar from "../Components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <img src={bg} />
    </div>
  );
};

export default Homepage;

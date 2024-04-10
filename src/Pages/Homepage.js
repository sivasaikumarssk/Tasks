import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "./Homepage.css";
import { gapi } from "gapi-script";
import ApexChart from "../Components/PieChart";
import BarChart from "../Components/Barchart";
const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

const Homepage = () => {
  let userDetails = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="welcome-note">
        Welcome <strong>{userDetails.name}</strong>
      </div>
      <div className="dashboard-data">
        <div>TimeSheet</div>
        <div>Attendance</div>
      </div>
      <div className="dashboard-data">
        {/* <img src={welcome} /> */}
        <ApexChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Homepage;

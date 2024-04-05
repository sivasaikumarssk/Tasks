import React,{ useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "./Homepage.css";
import welcome from "../Assets/Welcome.jpeg";
import { gapi } from "gapi-script";
const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

const Homepage = () => {
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
      <div>
        <img src={welcome} />
      </div>
    </div>
  );
};

export default Homepage;

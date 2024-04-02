import React from "react";
import Sidebar from "../Components/Sidebar";
import bg from "../Assets/bg1.jpg";
import Navbar from "../Components/Navbar";
import "./Homepage.css";
import Login from "./login";
import Logout from "./logout";
import { useEffect } from "react";
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
      <div className="login">
        <Login />
        <Logout />
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;

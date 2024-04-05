import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import img from "../Assets/bg1.jpg";
import "./Mainpage.css";
import bg from "../Assets/loginbg.jpg";

const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

const Mainpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const start = async () => {
      await gapi.client.init({ clientId: clientId, scope: "" });

      const authInstance = gapi.auth2.getAuthInstance();
      setIsLoggedIn(authInstance.isSignedIn.get());

      authInstance.isSignedIn.listen((isSignedIn) => {
        setIsLoggedIn(isSignedIn);
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="img">
        <img src={bg} />
      </div>
      <div className="login">
        <Login />
      </div>
    </>
  );
};

export default Mainpage;

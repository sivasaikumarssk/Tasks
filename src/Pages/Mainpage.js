import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import Login from "./login";

const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

const Mainpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const start = async () => {
      await gapi.client.init({ clientId: clientId, scope: "" });

      // Check if the user is already signed in
      const authInstance = gapi.auth2.getAuthInstance();
      setIsLoggedIn(authInstance.isSignedIn.get());

      // Listen for changes in authentication status
      authInstance.isSignedIn.listen((isSignedIn) => {
        setIsLoggedIn(isSignedIn);
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/homepage");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      Mainpage
      <div className="login">
        <Login />
      </div>
    </div>
  );
};

export default Mainpage;

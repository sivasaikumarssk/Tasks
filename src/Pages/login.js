import { GoogleLogin } from "react-google-login";
import React, { useState } from "react";

const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

function Login() {
  const [user, setUser] = useState(null);

  const onSuccess = (res) => {
    console.log("Login Success! Current user:", res.profileObj);
    setUser(res.profileObj);
    sessionStorage.setItem("user", JSON.stringify(res.profileObj));
  };

  const onFailure = (res) => {
    console.log("Login Failed! res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

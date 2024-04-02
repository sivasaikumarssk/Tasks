import { GoogleLogin } from "react-google-login";
import { useState } from "react";

const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

function Login() {
  const [user, setUser] = useState(null);

  const onSuccess = (res) => {
    console.log("Login Success! Current user:", res.profileObj);
    setUser(res.profileObj); // Set user data in state
    localStorage.setItem("user", JSON.stringify(res.profileObj)); // Save user data to localStorage
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

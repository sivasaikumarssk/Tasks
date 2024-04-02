import { GoogleLogout } from "react-google-login";
const clientId =
  "937248963100-61kuo1sinu15sph83fqc1ub6npjn3vrq.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout successfully");
  };
  return <div id="signOutButton">
     <GoogleLogout clientId={clientId} buttonText={"Logout"} onLogoutSuccess={onSuccess}/>
  </div>;
}

export default Logout;

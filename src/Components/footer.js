import React from "react";
import moment from "moment";
import footer from "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div><p>&copy; {moment().format(" YYYY")} QwikSpark. All rights reserved.</p></div>
      
    </div>
  );
};

export default Footer;

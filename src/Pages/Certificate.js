import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import logo from "../Assets/company-logo.jpeg";
import "./Certificate.css";
import moment from "moment";
import { usePDF } from "react-to-pdf";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar";
import { ReactToPrint } from "react-to-print";

const Certificate = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const tableRef = useRef(); // Define tableRef

  const { name, course } = useParams();

  useEffect(() => {
    document.title = `certificate - ${name} - ${course}`;
  }, [name, course]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div>
        <div className="download">
          <div>
            <ReactToPrint
              trigger={() => {
                return (
                  <button
                    style={{
                      position: "relative",
                      marginLeft: "23%",
                      width: "200px",
                      height: "50px",
                      top: "40px",
                      right: "200px",
                    }}
                  >
                    Print the certificate
                  </button>
                );
              }}
              content={() => tableRef.current}
              documentTitle="Certificate"
              pageStyle="print"
            />
          </div>
        </div>
        <div ref={tableRef}>
          <div className="certificate">
            <img src={logo} className="logo" alt="Company Logo" />
            <h1>CERTIFICATE</h1>
            <h2>OF COMPLETION</h2>
            <h3>This certificate is presented to</h3>
            <h4>{name}</h4>
            <p>For the successful completion of</p>
            <h5>{course}</h5>
            <div className="Footer">
              <div className="date">
                <span className="realdate">
                  {moment().format(" Do MMMM  YYYY")}
                </span>
                <div className="Date">DATE</div>
              </div>
              <div className="ceo">
                <span className="ceoName">Madhusudhan Vaddi</span>
                <div className="ceo-name">Co-founder & CTO QwikSpark</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Certificate;

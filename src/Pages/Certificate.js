import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../Assets/company-logo.jpeg";
import "./Certificate.css";
import moment from "moment";
import { usePDF } from "react-to-pdf";

const Certificate = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const { name, course } = useParams();

  useEffect(() => {
    document.title = `certificate - ${name} - ${course}`;
  }, [name, course]);

  return (
    <>
      <div>
        <button onClick={() => toPDF()}>
          Download PDF
          <a
            href="http://localhost:3000/certificate/vikram/Web%20Development"
            download
          />
        </button>
        <div ref={targetRef}>
          <div className="certificate">
            <img src={logo} className="logo" />
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
      </div>
    </>
  );
};

export default Certificate;

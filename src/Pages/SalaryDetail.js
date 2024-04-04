import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SalaryDetail.css";
import { usePDF } from "react-to-pdf";
import moment from "moment";
import logo from "../Assets/company-logo.jpeg";

const SalaryDetail = () => {
  const { name } = useParams();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  useEffect(() => {
    document.title = `salarydetails - ${name}`;
  }, [name]);
  return (
    <>
      <div ref={targetRef}>
        <div className="profile">
          <div className="name">
            <span className="detail-label">Employee Name :-</span>
            <span className="detail-value">VIKRAM</span>
          </div>
          <div className="designation">
            <span className="detail-label">Designation :-</span>
            <span className="detail-value">INTERN</span>
          </div>
          <div className="month-year">
            <span className="detail-label">Month & Year :-</span>
            <span className="detail-value">March 2024</span>
          </div>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="company-name">
          <span className="company">QwikSpark</span>
        </div>

        <div className="salary">
          <table>
            <tr>
              <td style={{ backgroundColor: "lightblue " }}>Earning</td>
              <td></td>
              <td style={{ backgroundColor: "lightblue" }}>Deduction</td>
              <td></td>
            </tr>
            <tr>
              <td>Basic & DA</td>
              <td>5200.00</td>
              <td>Provident Fund</td>
              <td>358.00</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td>3000.00</td>
              <td>E.S.I</td>
              <td>120.00</td>
            </tr>
            <tr>
              <td>Conveyance</td>
              <td>500.00</td>
              <td>loan</td>
              <td>-</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Profession Tax</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>TSD/IT</td>
              <td></td>
            </tr>
            <tr>
              <td>Total Addition</td>
              <td>8700.00</td>
              <td>Total Deduction</td>
              <td>478.00</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>NET SALARY</td>
              <td>82222.00</td>
            </tr>
          </table>
        </div>
        <div className="year">
          <span className="detail-label">Cheque No. :-</span>
          <span className="detail-value">15882</span>
        </div>
        <div className="year">
          <span className="detail-label">Date :-</span>
          <span className="detail-value">
            {moment().format(" Do MMMM YYYY")}
          </span>
        </div>
        <div className="year">
          <span className="detail-label">Signature of Employee :-</span>
          <span className="detail-value">______________</span>
        </div>
      </div>
      <div>
        <button onClick={() => toPDF()}>Download PDF</button>
      </div>
    </>
  );
};

export default SalaryDetail;

import React, { useState } from "react";
import "./CertificateMain.css";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Sidebar from "../Components/Sidebar";

const CertificateMain = () => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      window.location.href = `/certificate/${name}/${selectedOption}`;
    }, 1000);
  };
  const isSubmitDisabled = () => {
    return name.trim() === "";
  };

  return (
    <>
    <Sidebar/>
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="course">
          <label htmlFor="dropdown">Select an option:</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">-- Please Select --</option>
            <option value="Web Development">Web Development</option>
            <option value="Android Development">Android Development</option>
            <option value="React Native">React Native</option>
          </select>
        </div>
        <div className="button">
          <button
            onClick={handleSubmit}
            disabled={isSubmitDisabled()}
            className={!name.trim() ? "not-allowed" : ""}
          >
            Submit
          </button>
        </div>
        {isLoading && <Loader/>}
      </div>
    </>
  );
};

export default CertificateMain;

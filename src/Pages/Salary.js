import React, { useState } from "react";
import "./Salary.css";

const Salary = () => {
  const [name, setName] = useState("");
  
  return (
    <>
      <div className="container">
        <div className="input">
          <div>Enter The Name</div>
          <input
            type="text"
            placeholder="enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Salary;

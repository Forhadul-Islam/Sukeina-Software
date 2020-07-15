import React, { useState } from "react";
import "./Container.css";
import LeftBar from "../LeftBar/LeftBar";
import Content from "../Content/Content";
import fakeData from "../../fakeData";

const Container = () => {
  const [profiles, setprofiles] = useState(fakeData);
  const [employee, setEmployee] = useState([]);

  const employeeHandle = profile => {
    if (employee.indexOf(profile) == -1) {
      const newEmployee = [...employee, profile];
      setEmployee(newEmployee);
    } else {
      alert("This person is already added");
    }
  };

  return (
    <div className="container">
      <div className="leftBar">
        <LeftBar employee={employee}></LeftBar>
      </div>
      <div className="content">
        {profiles.map(profile => (
          <Content profile={profile} employeeHandle={employeeHandle}></Content>
        ))}
      </div>
    </div>
  );
};

export default Container;

import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";
import Stats from "../components/Stats";
import PowerTest from "../components/PowerTest";
import IOT from "../components/IOT";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <Stats />
        <PowerTest />
        <IOT />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Dashboard;

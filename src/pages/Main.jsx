import React from "react";
import "./Main.css";
import Dashboard from "./Dashboard";
import DailyChart from "../components/DailyChart";

const Main = () => {
  return (
    <div className="main-content">
      <Dashboard />
    </div>
  );
};

export default Main;

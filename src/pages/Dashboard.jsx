import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";
import Stats from "../components/Stats";
import DailyChart from "../components/DailyChart";

const Dashboard = () => {
  const { buildingName } = useParams();
  const displayName = buildingName || "inha";

  return (
    <div className="dashboard">
      <div className="header">
        <Stats />
      </div>
      <div className="content">
        <div className="charts">
          <DailyChart buildingName={displayName} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

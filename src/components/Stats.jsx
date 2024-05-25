import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <img src="/Clock.png" alt="Clock" className="stat-icon" />
        <span>05.06(Mon) 17:31</span>
      </div>
      <div className="stat-item">
        <img src="/Calender.png" alt="Calender" className="stat-icon" />
        <span>에코알라 데이: 28D 15H 39M</span>
      </div>
      <div className="stat-item">
        <img src="/Electronic.png" alt="Electronic" className="stat-icon" />
        <span>절약한 전력: 175kW</span>
      </div>
      <div className="stat-item">
        <img src="/Foot.png" alt="Foot" className="stat-icon" />
        <span>절약한 탄소: 28D 15H 39M</span>
      </div>
      <div className="stat-item">
        <img src="/Money.png" alt="Money" className="stat-icon" />
        <span>절약한 돈: 28D 15H 39M</span>
      </div>
    </div>
  );
};

export default Stats;

import React, { useState, useEffect } from "react";
import "./Stats.css";
import fetchPower from "../services/PowerService";
import { useParams } from "react-router-dom";

const Stats = () => {
  const { buildingID } = useParams(); // URL에서 buildingID 추출
  const [powerUsage, setPowerUsage] = useState({
    currentPowerUsage: 0,
    expectedPowerUsage: 0,
    savedPower: 0,
    savedCarbon: 0,
    savedMoney: 0,
  });

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchPowerData = async () => {
      try {
        console.log("buildingID(Stats) : ", buildingID);
        const data = await fetchPower(buildingID);
        const currentPower = parseInt(
          data.current_consumption.split(" ")[0],
          10
        ); // "350 kWh"에서 숫자만 추출
        const expectedPower = parseInt(
          data.expected_consumption.split(" ")[0],
          10
        ); // "500 kWh"에서 숫자만 추출
        const savedPower = expectedPower - currentPower;
        const savedCarbon = savedPower * 0.4;
        const savedMoney = savedPower * 200;
        setPowerUsage({
          currentPowerUsage: currentPower,
          expectedPowerUsage: expectedPower,
          savedPower: savedPower,
          savedCarbon: savedCarbon,
          savedMoney: savedMoney,
        });
      } catch (error) {
        console.error("Failed to fetch power data:", error);
      }
    };

    if (buildingID) {
      fetchPowerData();
    }

    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const date = now.getDate().toString().padStart(2, "0");
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      const day = dayNames[now.getDay()];
      setCurrentTime(`${month}.${date}(${day}) ${hours}시${minutes}분`);
    };

    updateClock();
    const timer = setInterval(updateClock, 60000);

    return () => clearInterval(timer);
  }, [buildingID]);

  return (
    <div className="stats-container">
      <div className="stat-item">
        <img src="/Clock.png" alt="Clock" className="stat-icon" />
        <span>{currentTime}</span>
      </div>
      <div className="stat-item">
        <img src="/Electronic.png" alt="Electronic" className="stat-icon" />
        <span>절약한 전력: {powerUsage.savedPower.toFixed(2)} kW</span>
      </div>
      <div className="stat-item">
        <img src="/Foot.png" alt="Foot" className="stat-icon" />
        <span>절약한 탄소: {powerUsage.savedCarbon.toFixed(2)} CO2 kg</span>
      </div>
      <div className="stat-item">
        <img src="/Money.png" alt="Money" className="stat-icon" />
        <span>절약한 돈: {powerUsage.savedMoney} 원</span>
      </div>
    </div>
  );
};

export default Stats;

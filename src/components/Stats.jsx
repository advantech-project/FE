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
        const data = await fetchPower(buildingID);
        console.log("현재전력사용량 : ", data.originalPowerUsage);
        console.log("예상전력사용량 : ", data.originPrediction);
        const currentPower = data.originalPowerUsage; // 현재 전력 사용량
        const expectedPower = data.originPrediction; // 예상 전력 사용량
        const savedPower = expectedPower - currentPower; // 절약된 전력
        const savedCarbon = savedPower * 0.4; // 절약된 탄소량 계산
        const savedMoney = savedPower * 200; // 절약된 비용 계산

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
        <span>절약한 돈: {powerUsage.savedMoney.toFixed(2)} 원</span>
      </div>
    </div>
  );
};

export default Stats;

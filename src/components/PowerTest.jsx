import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchPower from "../services/PowerService";
import "./PowerTest.css";

function PowerTest() {
  const { buildingID } = useParams();
  const [powerData, setPowerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPower(buildingID);
        setPowerData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다", error);
        setError("서버 연결에 실패했습니다. 서버 상태를 확인해주세요.");
        setIsLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 600000);

    return () => clearInterval(intervalId);
  }, [buildingID]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="power-usage-box">
      <div className="power-usage-item">
        {/* <h1>현재 전력 사용량</h1>
        <p>{powerData.current_consumption || "데이터 없음"}</p>
      </div>
      <div className="power-usage-item">
        <h1>예상 전력 사용량</h1>
        <p>{powerData.expected_consumption || "데이터 없음"}</p> */}
        <h1>현재 전력 사용량</h1>
        <p>{powerData.datavalue || "데이터 없음"}</p>
      </div>
      <div className="power-usage-item">
        <h1>예상 전력 사용량</h1>
        <p>{powerData.datavalue || "데이터 없음"}</p>
      </div>
    </div>
  );
}

export default PowerTest;

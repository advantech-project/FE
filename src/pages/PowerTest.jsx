import React, { useState, useEffect } from "react";
import PowerService from "../services/PowerService"; // 데이터 서비스 모듈 임포트

function PowerTest() {
  const [power, setPower] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const powerData = await PowerService.fetchPower(); // 서비스 모듈에서 데이터 요청
        setPower(powerData);
        setIsLoading(false);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다", error);
        setError("서버 연결에 실패했습니다. 서버 상태를 확인해주세요.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1
        style={{ color: "white", backgroundColor: "black", fontSize: "24px" }}
      >
        전력 사용량
      </h1>
      {isLoading ? (
        <p>데이터 로딩 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>현재 전력 사용량: {power} kW</p>
      )}
    </div>
  );
}

export default PowerTest;

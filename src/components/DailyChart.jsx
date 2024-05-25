import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import "./DailyChart.css";

// Chart.js에 필요한 스케일과 요소를 등록합니다.
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const getBuildingData = (buildingName) => {
  // 빌딩별 데이터를 정의합니다.
  const buildingData = {
    5: [
      180, 170, 160, 155, 150, 160, 170, 180, 200, 220, 240, 260, 280, 300, 320,
      340, 360, 380, 400, 420, 440, 460, 480, 500,
    ],
    hightech: [
      160, 150, 140, 135, 130, 140, 150, 160, 180, 200, 220, 240, 260, 280, 300,
      320, 340, 360, 380, 400, 420, 440, 460, 480,
    ],
    60: [
      200, 190, 180, 175, 170, 180, 190, 200, 220, 240, 260, 280, 300, 320, 340,
      360, 380, 400, 420, 440, 460, 480, 500, 520,
    ],
    inha: [
      150, 140, 130, 125, 120, 130, 140, 150, 170, 190, 210, 230, 250, 270, 290,
      310, 330, 350, 370, 390, 410, 430, 450, 470,
    ],
  };

  return buildingData[buildingName] || [];
};

const DailyChart = ({ buildingName }) => {
  const data = {
    labels: [
      "02",
      "04",
      "06",
      "08",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
    ],
    datasets: [
      {
        label: "전력사용량 (kW)",
        data: getBuildingData(buildingName),
        fill: false,
        borderColor: "rgba(75,192,192,1)", // 회색 선
        backgroundColor: "rgba(255,255,255,0.5)", // 회색 데이터 포인트
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "시간",
          color: "#fff", // 제목 색상
        },
        ticks: {
          color: "#fff", // 축 라벨 색상
        },
      },
      y: {
        title: {
          display: true,
          text: "전력사용량 (kW)",
          color: "#fff", // 제목 색상
        },
        ticks: {
          color: "#fff", // 축 라벨 색상
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff", // 전력사용량(kW) 라벨 색상
        },
      },
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <div className="daily-chart">
      <h2>{buildingName} 금일 총 사용현황</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DailyChart;

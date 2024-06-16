import React, { useState, useEffect } from "react";
import "./IOT.css";
import IOTservice from "../services/IOTservice";

function IOT_signal() {
  const [iotDevices, setIotDevices] = useState([
    { iot_id: "1", status: "기정맘", iot_name: "Fan", Room: "202" },
    { iot_id: "2", status: "기정맘", iot_name: "Plug", Room: "204" },
  ]);
  const [allOn, setAllon] = useState(false);

  useEffect(() => {
    const fetchAllIotStatuses = async () => {
      try {
        // 모든 IOT 장치 상태를 한 번에 가져오는 API 가정
        const allStatuses = await IOTservice.fetchIOTstatus();
        const updatedDevices = iotDevices.map((device) => {
          const statusUpdate = allStatuses.find(
            (status) => status.id.toString() === device.iot_id //fetch한 id값과 iot_id값이 동일한 것들은 update
          );
          return statusUpdate
            ? { ...device, status: statusUpdate.status }
            : device;
        });
        setIotDevices(updatedDevices);
      } catch (error) {
        console.error("Failed to fetch IOT statuses:", error);
      }
    };

    fetchAllIotStatuses();
  }, [iotDevices]);

  const handleIotControl = async (iot_id, newStatus) => {
    try {
      const response = await IOTservice.controlIOTdevice({
        iot_id,
        status: newStatus,
      });
      if (response.success) {
        // 서버에서 성공 응답을 받았다면 상태 업데이트 ★★★★여기서 만약 update안되면 위에 fetchAllIOTstatus에 allStatuses.find()이 부분 참고해서 하기★★★★
        const updatedDevices = iotDevices.map((device) => {
          if (device.id === iot_id) {
            return { ...device, status: newStatus };
          }
          return device;
        });
        setIotDevices(updatedDevices);
        alert(`IOT ${newStatus.toLowerCase()} successfully!`);
      } else {
        alert(`Failed to set IOT ${newStatus.toLowerCase()}.`);
      }
    } catch (error) {
      console.error("Error controlling IOT device:", error);
      alert("Failed to control IOT device.");
    }
  };
  return (
    <div className="iot-container">
      <div className="iot-all-container">
        <img
          src={allOn ? "/ON.png" : "/OFF.png"} // allOn 상태에 따라 이미지 변경
          alt={allOn ? "ONLogo" : "OFFLogo"}
          onClick={() => {
            handleIotControl(allOn ? "OFF" : "ON"); // allOn 상태에 따라 적절한 신호 전송
            setAllon(!allOn); // allOn 상태 토글
          }}
          className="iot-all-button" // CSS 클래스 이름으로 버튼 스타일 적용
          style={{ cursor: "pointer" }} // 마우스 포인터를 손가락 모양으로 설정
        />
      </div>

      {iotDevices.map((device) => (
        <div key={device.iot_id} className="iot-box">
          <div className="iot-header">
            {device.Room}호 {device.iot_name} (ID: {device.iot_id})
          </div>
          <div className="iot-status">Status: {device.status}</div>
          <div className="iot-controls">
            <button
              onClick={() => handleIotControl(device.iot_id, "ON")}
              className="iot-button"
            >
              ON
            </button>
            <button
              onClick={() => handleIotControl(device.iot_id, "OFF")}
              className="iot-button"
            >
              OFF
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IOT_signal;

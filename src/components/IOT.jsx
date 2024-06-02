import React, { useState, useEffect } from "react";
import "./IOT.css";
import IOTservice from "../services/IOTservice";

function IOT_signal() {
  const [iotDevices, setIotDevices] = useState([
    { iot_id: "1", status: "Undefined", iot_name: "Fan", Room: "202" },
    { iot_id: "2", status: "Undefined", iot_name: "Plug", Room: "204" },
  ]);

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
  }, []);

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
      {iotDevices.map((device) => (
        <div key={device.iot_id} className="iot-box">
          <div className="iot-header">
            Room {device.Room} IOT_name {device.iot_name} (ID: {device.iot_id})
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

import React, { useState, useEffect } from "react";
import "./IOT.css";
import IOTservice from "../services/IOTservice";

function IOT_signal() {
  const [iotDevices, setIotDevices] = useState([
    { room_number: "202", iot_name: "fan", iot_id: "1", status: "OFF" },
    { room_number: "204", iot_name: "plug", iot_id: "2", status: "OFF" },
  ]);

  useEffect(() => {
    const fetchAllIotStatuses = async () => {
      try {
        // 모든 IOT 장치 상태를 한 번에 가져오는 API 가정
        const allStatuses = await IOTservice.fetchIOTstatus();
        setIotDevices(
          allStatuses.map((status) => ({
            iot_id: status.iot_id,
            status: status.status,
          }))
        );
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
        // 서버에서 성공 응답을 받았다면 상태 업데이트
        const updatedDevices = iotDevices.map((device) => {
          if (device.iot_id === iot_id) {
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
            Room {device.room_number} - {device.iot_name} (ID: {device.iot_id})
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

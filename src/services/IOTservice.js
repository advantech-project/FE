// src/services/IOTService.js
import axios from "axios";

const API_URL = "http://localhost:8080";

export const fetchIOTstatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/iots/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch IOT statuses:", error);
    throw new Error("Failed to fetch IOT statuses");
  }
};
const controlIOTdevice = async (details) => {
  try {
    const response = await axios.post(`${API_URL}/iot-control`, details);
    return response.data;
  } catch (error) {
    console.error(`Error turning off IOT device:`, error);
    throw new Error(
      `An error occurred while turning off the IOT device: ${error.message}`
    );
  }
};

export default { controlIOTdevice, fetchIOTstatus };

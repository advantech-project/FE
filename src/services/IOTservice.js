// src/services/IOTService.js
import axios from "axios";

const API_URL = "http://47.128.225.145:5017";

export const fetchIOTstatus = async () => {
  try {
    console.log("222");
    const response = await axios.get(`${API_URL}/iots`);
    console.log("1111" + response);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch IOT statuses:", error);
    throw new Error("Failed to fetch IOT statuses");
  }
};
const controlIOTdevice = async (details) => {
  try {
    const response = await axios.post(`${API_URL}/iot/turn`, details);
    console.log("1 asdasdad  " + response.data);
    return response;
  } catch (error) {
    console.error(`Error turning off IOT device:`, error);
    throw new Error(
      `An error occurred while turning off the IOT device: ${error.message}`
    );
  }
};

export default { controlIOTdevice, fetchIOTstatus };

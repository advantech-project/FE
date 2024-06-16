import axios from "axios";

const API_URL = "http://47.128.214.187:5017";

async function fetchPower(buildingID) {
  const url = `${API_URL}/${buildingID}/power-usage`;
  try {
    const response = await axios.get(url);
    return response.data; // 데이터 반환
  } catch (error) {
    console.error(`PowerService fetchPower Error in ${buildingID}:`, error);
    console.log("Fetch Power Usage is Error");

    // 에러에 커스텀 메시지 또는 추가 정보를 포함할 수 있습니다.
    throw new Error(
      `An error occurred while fetching power data for ${buildingID}: ${error.message}`
    );
  }
}
export default fetchPower;

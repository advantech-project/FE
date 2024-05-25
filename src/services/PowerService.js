import axios from "axios";

const API_URL = "http://localhost:8080/test-power";

class PowerService {
  static async fetchPower() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // 데이터 반환
    } catch (error) {
      console.error("PowerService fetchPower Error:", error);
      // 에러에 커스텀 메시지 또는 추가 정보를 포함할 수 있습니다.
      throw new Error(
        `An error occurred while fetching power data: ${error.message}`
      );
    }
  }
}

export default new PowerService();

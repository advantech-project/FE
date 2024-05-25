import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

class UserService {
  getUsers() {
    return axios.get(API_URL);
  }
}

export default new UserService();

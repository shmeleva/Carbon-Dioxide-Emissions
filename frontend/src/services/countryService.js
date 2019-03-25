import axios from "axios";

export default {
  async get(code) {
    try {
      var response = await axios.get("/countries", {
        responseType: "json",
        params: {
          codes: code
        }
      });
      if (response.data.length) {
        return response.data[0];
      }
    } catch (error) {
      console.error(error);
    }
  },
  async getAll() {
    try {
      var response = await axios.get("/countries", {
        responseType: "json",
        params: {
          compact: "true"
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
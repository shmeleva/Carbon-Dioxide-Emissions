import axios from "axios";

export default {
  async get(code) {
    try {
      var response = await axios.get(`/countries/${code}`, {
        responseType: "json",
        params: {
          fields: "code name income superpower emissions"
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getAll() {
    try {
      var response = await axios.get(`/countries`, {
        responseType: "json",
        params: {
          fields: "code name"
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
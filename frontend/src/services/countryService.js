import axios from "axios";

const root = "";

export default {
  async get(code) {
    try {
      var response = await axios.get(`${root}/countries/${code}`, {
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
      var response = await axios.get(`${root}/countries`, {
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
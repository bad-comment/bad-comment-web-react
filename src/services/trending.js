import axios from "axios";

export const trendingService = {
  kings: async function () {
    try {
      const res = await axios.get("/api/trending/kings");
      return res.data;
    } catch (e) {
      throw e;
    }
  },
};

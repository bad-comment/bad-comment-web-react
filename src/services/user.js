import axios from "axios";

export const userService = {
  getUser: async function () {
    const res = await axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  },
};

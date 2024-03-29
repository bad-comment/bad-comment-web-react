import axios from "axios";

export const authService = {
  async signIn(account, password) {
    try {
      const res = await axios.post(`/api/auth/sign_in`, {
        account,
        password,
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  async signUp(account, password) {
    try {
      const res = await axios.post(`/api/auth/sign_up`, {
        account,
        password,
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  },
};

import axios from "axios";

export const subjectService = {
  create: async function (name) {
    try {
      const res = await axios.post(
        "/api/subjects",
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  getOne: async function () {
    const res = await axios.get("/api/subjects/random", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return res.data;
  },
  createSubjectComment: async function (subjectId, score) {
    const res = await axios.post(
      `/api/subjects/${subjectId}/comments`,
      {
        score,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.data;
  },
};

import axios from "axios";

const BACKEND_URL = "https://facultiesomedicaps.onrender.com";
const authToken =
  typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
axios.defaults.headers.common.Authorization = authToken
  ? `Bearer ${authToken}`
  : "";

const setAuthToken = (token) => {
  const authToken = `Bearer ${token}`;
  localStorage.setItem("token", token);
  axios.defaults.headers.common.Authorization = authToken;
};

const registerUser = async (body) => {
  try {
    const { data } = await axios.post(`${BACKEND_URL}/auth/register`, body);
    setAuthToken(data.body.token);
    return { status: "ok", error: "" };
  } catch (err) {
    return {
      status: "error",
      error: err.response
        ? err.response.data.message
        : "Error occured while performing this action.",
    };
  }
};

const loginUser = async (body) => {
  try {
    const { data } = await axios.post(`${BACKEND_URL}/auth/login`, body);
    setAuthToken(data.body.token);
    return { status: "ok", error: "" };
  } catch (err) {
    return {
      status: "error",
      error: err.response
        ? err.response.data.message
        : "Error occured while performing this action.",
    };
  }
};

const getFaculties = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/faculties`);
  return data.body;
};

const reviewFaculty = async (facId, review) => {
  const { data } = await axios.post(
    `${BACKEND_URL}/user/review/${facId}`,
    review,
  );
  if (data.isError) {
    return null;
  } else {
    return data.body;
  }
};

export { loginUser, registerUser, getFaculties, reviewFaculty };

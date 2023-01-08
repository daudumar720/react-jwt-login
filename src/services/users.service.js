import { axios } from "./axios";
// import axios from "axios";

const getAllUsers = () => {
  return axios
    .get("/api/users")
    .then((response) => response && response.data && response.data.users);
};

const login = (credential) => {
  const url = "api/users/login";
  return axios.post(url, credential);
};

export { getAllUsers, login };

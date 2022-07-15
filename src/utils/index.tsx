import axios from "axios";

export function getRateData() {
  return axios.get(`/api?authkey=${process.env.REACT_APP_KEY}&data=AP01`);
}

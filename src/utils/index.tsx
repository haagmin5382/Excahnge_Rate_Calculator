import axios from "axios";

export function getRateData() {
  return axios.get(`/api`);
}

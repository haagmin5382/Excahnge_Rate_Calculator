import axios from "axios";

export async function getRateData() {
  return axios.get(`/api`);
}

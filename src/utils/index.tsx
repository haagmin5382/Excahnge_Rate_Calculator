import axios from "axios";

export function getRateData() {
  return axios.get(
    `/api?authkey=${process.env.REACT_APP_KEY}&searchdate=${20220715}&data=AP01`
  );
}

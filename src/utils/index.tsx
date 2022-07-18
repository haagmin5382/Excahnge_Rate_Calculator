import axios from "axios";

export function getRateData() {
  const today = new Date();
  const year = `${today.getFullYear()}`;
  const month =
    `${today.getMonth() + 1}`.length > 1
      ? `${today.getMonth() + 1}`
      : `0${today.getMonth() + 1}`;
  const day = today.getDay();
  const date =
    day === 0 || day === 6
      ? `${day === 0 ? today.getDate() - 2 : today.getDate() - 1}`
      : `${today.getDate()}`;
  return axios.get(
    `/api?authkey=${process.env.REACT_APP_KEY}&searchdate=${20220718}&data=AP01`
  );
}

import axios from "axios";

export function getRateData() {
  // const today = new Date();

  // console.log(year, month, date, hour);
  let today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  today = new Date();
  const two_days_ago = new Date(today.setDate(today.getDate() - 2));
  today = new Date();

  const year = `${today.getFullYear()}`;
  const month =
    `${today.getMonth() + 1}`.length > 1
      ? `${today.getMonth() + 1}`
      : `0${today.getMonth() + 1}`;
  const day = today.getDay();
  const hour = today.getHours();
  const date =
    day === 0 || day === 6
      ? `${day === 0 ? two_days_ago.getDate() : yesterday.getDate()}`
      : `${hour > 11 ? today.getDate() : yesterday.getDate()}`;

  return axios.get(
    `/api?authkey=${process.env.REACT_APP_KEY}&searchdate=${
      year + month + date
    }&data=AP01`
  );
}

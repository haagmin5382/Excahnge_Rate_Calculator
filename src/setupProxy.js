const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
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

  app.use(
    createProxyMiddleware("/api", {
      target: `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${
        process.env.REACT_APP_KEY
      }&searchdate=${year + month + date}&data=AP01`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

import React, { useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Calculator from "./Calculator";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { getRateData } from "../utils/index";
import { debounce } from "lodash";
const Main = () => {
  // 6 => 위안화 , 8 => 유로화 , 9 => 영국 파운드 , 11 => 일본 엔 ,13 => 한국 원 , 22 => 미국 달러

  interface currencyDataType {
    [key: string]: number;
  }
  const currencyData: currencyDataType = {
    CHINA: 6,
    EURO: 7,
    UK: 8,
    JAPAN: 11,
    KOREA: 12,
    USA: 21,
  };

  const [currency1, setCurrency1] = useState("USA");
  const [value1, setValue1] = useState("0");

  const [currency2, setCurrency2] = useState("KOREA");
  const [value2, setValue2] = useState("0");

  const handleCurrency1 = (event: SelectChangeEvent) => {
    setCurrency1(event.target.value as string);
    delaySetValue1(value1, event.target.value);
    // console.log(event.target.value, currency1);
  };
  const handleCurrency2 = (event: SelectChangeEvent) => {
    setCurrency2(event.target.value as string);
    delaySetValue2(value2, event.target.value);
    // console.log(currency2);
  };

  const handleValue1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(event.currentTarget.value);
    delaySetValue1(event.currentTarget.value, currency1);
  };
  const handleValue2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.currentTarget.value);
    delaySetValue2(event.currentTarget.value, currency2);
  };

  const switchValue = () => {
    setValue1(value2);
    setValue2(value1);
    setCurrency1(currency2);
    setCurrency2(currency1);
  };

  const delaySetValue1 = useCallback(
    debounce((value, Currency) => {
      getRateData().then(({ data }) => {
        // 엔화일 경우 , 100으로 나누어줘야 변환 가능

        const rate =
          currencyData[Currency] === 11 // 통화가 엔화일 경우
            ? Number(data[currencyData[Currency]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[Currency]].bkpr.replace(",", ""));
        const rate2 =
          currencyData[currency2] === 11 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency2]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency2]].bkpr.replace(",", ""));

        setValue1(value);
        setValue2(((Number(value) * rate) / rate2).toString());
      });
    }, 1000),
    [currency1, currency2]
  );
  // currency1 또는 currency2가 달라지면 안에있는 함수가 실행된다.

  const delaySetValue2 = useCallback(
    debounce((value, Currency) => {
      getRateData().then(({ data }) => {
        // 엔화일 경우 , 100으로 나누어줘야 변환 가능

        const rate =
          currencyData[currency1] === 11 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency1]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency1]].bkpr.replace(",", ""));
        const rate2 =
          currencyData[Currency] === 11 // 통화가 엔화일 경우
            ? Number(data[currencyData[Currency]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[Currency]].bkpr.replace(",", ""));

        setValue2(value);
        setValue1(((Number(value) * rate2) / rate).toString());
      });
    }, 1000),
    [currency1, currency2]
  );

  return (
    <main>
      <CssBaseline />
      <Container
        fixed
        maxWidth="sm"
        sx={{
          border: "2px solid powderblue",
          borderRadius: "20px",
          marginTop: "5vh",
          height: "80vh",
          background: "powderblue",
        }}
      >
        <Calculator
          currency={currency1}
          handleCurrency={handleCurrency1}
          value={value1}
          handleValue={handleValue1}
        />
        <LoopIcon
          fontSize="large"
          sx={{ marginTop: 5, marginLeft: 30 }}
          onClick={switchValue}
        />
        <Calculator
          currency={currency2}
          handleCurrency={handleCurrency2}
          value={value2}
          handleValue={handleValue2}
        />
      </Container>
    </main>
  );
};

export default Main;

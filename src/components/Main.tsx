import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Calculator from "./Calculator";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { getRateData } from "../utils/index";

const Main = () => {
  // 6 => 위안화 , 8 => 유로화 , 9 => 영국 파운드 , 12 => 일본 엔 ,13 => 한국 원 , 22 => 미국 달러
  interface currencyDataType {
    [key: string]: number;
  }
  const currencyData: currencyDataType = {
    CHINA: 6,
    EURO: 8,
    UK: 9,
    JAPAN: 12,
    KOREA: 13,
    USA: 22,
  };

  const [currency1, setCurrency1] = useState("USA");
  const [value1, setValue1] = useState("");

  const [currency2, setCurrency2] = useState("KOREA");
  const [value2, setValue2] = useState("");

  const handleCurrency1 = (event: SelectChangeEvent) => {
    setCurrency1(event.target.value as string);
  };
  const handleCurrency2 = (event: SelectChangeEvent) => {
    setCurrency2(event.target.value as string);
  };
  const handleValue1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(event.target.value as string);
  };
  const handleValue2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value as string);
  };
  console.log(
    "currency1 : ",
    currencyData[currency1],
    "currency2 : ",
    currencyData[currency2]
  );

  useEffect(() => {
    getRateData().then(({ data }) => {
      const rate =
        currencyData[currency1] === 12
          ? Number(data[currencyData[currency1]].bkpr.replace(",", "")) / 100
          : Number(data[currencyData[currency1]].bkpr.replace(",", ""));

      const rate2 =
        currencyData[currency2] === 12
          ? Number(data[currencyData[currency2]].bkpr.replace(",", "")) / 100
          : Number(data[currencyData[currency2]].bkpr.replace(",", ""));

      console.log("rate : ", rate, ", rate2 : ", rate2);
      setValue2(((Number(value1) * Number(rate)) / Number(rate2)).toString());
    });
  }, [currency1, currency2, value1, value2]);

  return (
    <div>
      <CssBaseline />
      <Container fixed maxWidth="sm">
        <Calculator
          currency={currency1}
          setCurrency={handleCurrency1}
          value={value1}
          setValue={handleValue1}
        />
        <LoopIcon fontSize="large" sx={{ marginTop: 5, marginLeft: 30 }} />
        <Calculator
          currency={currency2}
          setCurrency={handleCurrency2}
          value={value2}
          setValue={handleValue2}
        />
      </Container>
    </div>
  );
};

export default Main;

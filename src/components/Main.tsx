import React, { useEffect, useCallback, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Calculator from "./Calculator";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { getRateData } from "../utils/index";
import { debounce } from "lodash";

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

  const [switching, setSwitching] = useState(true);

  const handleCurrency1 = (event: SelectChangeEvent) => {
    setCurrency1(event.target.value as string);
    setSwitching(true);
  };
  const handleCurrency2 = (event: SelectChangeEvent) => {
    setCurrency2(event.target.value as string);
    setSwitching(false);
  };

  const delaySetValue1 = useCallback(
    debounce((value) => {
      getRateData().then(({ data }) => {
        // 엔화일 경우 , 100으로 나누어줘야 변환 가능
        const rate =
          currencyData[currency1] === 12 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency1]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency1]].bkpr.replace(",", ""));
        const rate2 =
          currencyData[currency2] === 12 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency2]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency2]].bkpr.replace(",", ""));

        setValue2(((Number(value) * rate) / rate2).toString());
      });
    }, 1000),
    [currency1, value1]
  );
  const delaySetValue2 = useCallback(
    debounce((value) => {
      getRateData().then(({ data }) => {
        // 엔화일 경우 , 100으로 나누어줘야 변환 가능
        const rate =
          currencyData[currency1] === 12 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency1]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency1]].bkpr.replace(",", ""));
        const rate2 =
          currencyData[currency2] === 12 // 통화가 엔화일 경우
            ? Number(data[currencyData[currency2]].bkpr.replace(",", "")) / 100
            : Number(data[currencyData[currency2]].bkpr.replace(",", ""));

        setValue1(((Number(value) * rate2) / rate).toString());
      });
    }, 1000),
    [currency2, value2]
  );

  const handleValue1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(event.currentTarget.value);
    setSwitching(true);
    delaySetValue1(event.currentTarget.value);
  };
  const handleValue2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.currentTarget.value);
    setSwitching(false);
    delaySetValue2(event.currentTarget.value);
  };

  return (
    <div>
      <CssBaseline />
      <Container fixed maxWidth="sm">
        <Calculator
          currency={currency1}
          handleCurrency={handleCurrency1}
          value={value1}
          handleValue={handleValue1}
        />
        <LoopIcon fontSize="large" sx={{ marginTop: 5, marginLeft: 30 }} />
        <Calculator
          currency={currency2}
          handleCurrency={handleCurrency2}
          value={value2}
          handleValue={handleValue2}
        />
      </Container>
    </div>
  );
};

export default Main;

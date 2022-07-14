import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Calculator from "./Calculator";
import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
const Main = () => {
  const [currency1, setCurrency1] = useState("");
  const [value1, setValue1] = useState("");

  const [currency2, setCurrency2] = useState("");
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

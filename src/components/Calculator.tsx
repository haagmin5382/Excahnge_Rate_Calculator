import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
interface Props {
  currency: string;
  handleCurrency: (e: SelectChangeEvent) => void;
  value: string;
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Calculator = ({
  currency,
  handleCurrency,
  value,
  handleValue,
}: Props) => {
  return (
    <Box sx={{ minWidth: 120, marginTop: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="currency"
          value={currency}
          onChange={handleCurrency}
        >
          <MenuItem value={"USA"}>$ (USA)</MenuItem>
          <MenuItem value={"CHINA"}>Ұ (CHINA)</MenuItem>
          <MenuItem value={"JAPAN"}>¥ (JAPAN)</MenuItem>
          <MenuItem value={"EURO"}>€ (EURO)</MenuItem>
          <MenuItem value={"UK"}>£ (UK)</MenuItem>
          <MenuItem value={"KOREA"}>₩ (KOREA)</MenuItem>
        </Select>
        <TextField
          id="outlined-number"
          label="Value"
          margin="normal"
          value={value}
          onChange={handleValue}
        />
      </FormControl>
    </Box>
  );
};

export default Calculator;

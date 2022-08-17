import React from "react";
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
    <Box
      sx={{
        minWidth: 120,
        marginTop: 5,
        padding: "20px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="currency"
          value={currency}
          onChange={handleCurrency}
        >
          <MenuItem sx={{ color: "navy" }} value={"USA"}>
            $ (USA)
          </MenuItem>
          <MenuItem sx={{ color: "red" }} value={"CHINA"}>
            Ұ (CHINA)
          </MenuItem>
          <MenuItem sx={{ color: "pink" }} value={"JAPAN"}>
            ¥ (JAPAN)
          </MenuItem>
          <MenuItem sx={{ color: "green" }} value={"EURO"}>
            € (EURO)
          </MenuItem>
          <MenuItem sx={{ color: "blue" }} value={"UK"}>
            £ (UK)
          </MenuItem>
          <MenuItem sx={{ color: "gray" }} value={"KOREA"}>
            ₩ (KOREA)
          </MenuItem>
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

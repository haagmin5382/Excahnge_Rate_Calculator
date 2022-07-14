import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
const Calculator = () => {
  const [currency, setcurrency] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setcurrency(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120, marginTop: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="currency"
          onChange={handleChange}
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
          type="number"
          margin="normal"
        />
      </FormControl>
    </Box>
  );
};

export default Calculator;

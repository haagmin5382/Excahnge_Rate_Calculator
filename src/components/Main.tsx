import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Calculator from "./Calculator";
import LoopIcon from "@mui/icons-material/Loop";

const Main = () => {
  return (
    <div>
      <CssBaseline />
      <Container fixed maxWidth="sm">
        <Calculator />
        <LoopIcon fontSize="large" sx={{ marginTop: 5, marginLeft: 30 }} />
        <Calculator />
      </Container>
    </div>
  );
};

export default Main;

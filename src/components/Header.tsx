import { AppBar, Toolbar, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar variant="dense">
          <CurrencyExchangeIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              py: 3,
            }}
          >
            Exchange Rate Calculator
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;

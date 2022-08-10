import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[800],
          }}
        >
          <Container>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              환율 정보 출처 : 한국 수출입 은행 환율 정보
            </Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;

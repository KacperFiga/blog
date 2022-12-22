import Router from "next/router";
import { Box, Typography } from "@mui/material";
import { shades } from "../../constants/theme";

const boxContainerStyles = {
  backgroundColor: shades.secondary[300],
  display: "inline-block",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  padding: { md: "20px 98px", xs: "20px 20px" },
};

const additionalStylesForHeaderText = {
  cursor: "pointer",
  letterSpacing: "1px",
  fontSize: {
    xs: "1.5em",
    sm: "2em",
  },
};

export const Header = () => {
  const goToHomePage = () => {
    Router.push("/");
  };

  return (
    <Box sx={boxContainerStyles}>
      <Typography
        variant="h4"
        color={shades.primary[500]}
        sx={additionalStylesForHeaderText}
        onClick={goToHomePage}
      >
        Witaj na moim blogu!
      </Typography>
    </Box>
  );
};

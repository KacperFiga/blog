import { Box } from "@mui/material";
import React from "react";
import { shades } from "../../constants/theme";
import styles from "./Footer.module.css";

const footerStyles = {
  backgroundColor: shades.primary[500],
  color: shades.neutral[500],
  padding: { md: "20px 98px", xs: "20px 20px" },
};

export const Footer = () => {
  return (
    <Box component="footer" className={styles.container} sx={footerStyles}>
      <Box>
        Strona została wykonana w celu przestesowania integracji Strapi z
        Next.js, kwestie estetyczne zostały potraktowana drugorzędnie.
      </Box>
    </Box>
  );
};

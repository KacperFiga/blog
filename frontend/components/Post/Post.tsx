import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { shades } from "../../constants/theme";
import styles from "./Post.module.css";

const boxStyles = {
  backgroundColor: shades.neutral[300],
  padding: "20px",
  borderRadius: "20px",
  color: shades.primary[500],
};

const descriptionBoxStyles = {
  fontSize: "0.8em",
};

const articleHeaderStyles = {
  marginBottom: "20px",
};

const headerTextStyles = {
  fontWeight: "600",
};
const articleDateStyles = {
  marginTop: "15px",
  fontSize: "0.8em",
};

export const Post = ({ title, description, date, id }: any) => (
  <Link href={`/post/${id}`} className={styles.container}>
    <Box sx={boxStyles}>
      <Box sx={articleHeaderStyles}>
        <Typography color={shades.secondary[500]} sx={headerTextStyles}>
          {title}
        </Typography>
      </Box>
      <article>
        <Typography sx={descriptionBoxStyles}>{description}</Typography>
      </article>
      <section>
        <Typography sx={articleDateStyles}>{date}</Typography>
      </section>
    </Box>
  </Link>
);

import { Box, Typography } from "@mui/material";

export const Post = ({ title, description, date }: any) => (
  <Box>
    <header>
      <h3> {title}</h3>
    </header>
    <article>
      <Typography>{description}</Typography>
    </article>
    <section>
      <p>{date}</p>
    </section>
  </Box>
);

import { Box, Typography } from "@mui/material";

export const Post = ({ title, content, date }: any) => (
  <Box>
    <header>
      <h3> {title}</h3>
    </header>
    <article>
      <Typography>{content}</Typography>
    </article>
    <section>
      <p>{date}</p>
    </section>
  </Box>
);

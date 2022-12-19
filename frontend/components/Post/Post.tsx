import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const Post = ({ title, description, date, id }: any) => (
  <Link href={`/post/${id}`}>
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
  </Link>
);

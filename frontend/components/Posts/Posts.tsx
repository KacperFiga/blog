import React from "react";
import { Post } from "../Post/Post";
import { postI, postsI } from "../../constants/types";
import { Box } from "@mui/material";
import { shades } from "../../constants/theme";

const boxStyles = {
  backgroundColor: shades.neutral[100],
  padding: "40px 10px",
  borderRadius: "20px",
};

export const Posts = ({ data }: postsI) => {
  const posts = data.map((post: postI) => (
    <Post
      key={post.id}
      title={post.attributes.title}
      description={post.attributes.description}
      date={post.attributes.date}
      id={post.id}
    />
  ));

  return <Box sx={boxStyles}>{posts}</Box>;
};

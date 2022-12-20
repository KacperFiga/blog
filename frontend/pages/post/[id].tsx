import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { POSTS_API } from "../../constants/paths";
import { postI } from "../../constants/types";

const PostPage = ({ data: { data } }: any) => {
  return (
    <Box>
      <Typography>{data.attributes.title}</Typography>
      <Typography>{data.attributes.content}</Typography>
      <Typography>{data.attributes.date}</Typography>
    </Box>
  );
};

export const getStaticProps = async ({ params }: postI) => {
  const response = await axios.get(`${POSTS_API}/${params.id}`);

  return {
    props: {
      data: response.data,
    },
  };
};

export const getStaticPaths = async () => {
  const postsResponse = await axios.get(POSTS_API);

  const paths = postsResponse.data.data.map((post: postI) => ({
    params: {
      id: post.id?.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;

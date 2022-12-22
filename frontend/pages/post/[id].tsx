import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { POSTS_API } from "../../constants/paths";
import { postI } from "../../constants/types";
import { shades } from "../../constants/theme";

const boxStyles = {
  backgroundColor: shades.neutral[200],
  padding: { md: "50px 40px", xs: "20px 20px" },
  borderRadius: "10px",
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  margin: { md: "20px 98px", xs: "20px 20px" },
};

const articleHeaderStyles = {
  fontWeight: "bold",
  fontSize: "1.2em",
};

const containerStyles = {
  minHeight: "100vh",
};

const PostPage = ({ data: { data } }: any) => {
  return (
    <Box sx={containerStyles}>
      <Box sx={boxStyles}>
        <Typography sx={articleHeaderStyles}>
          {data.attributes.title}
        </Typography>
        <Typography>{data.attributes.content}</Typography>
        <Typography>{data.attributes.date}</Typography>
      </Box>
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

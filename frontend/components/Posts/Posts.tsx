import React from "react";
import { Post } from "../Post/Post";
import { postI, postsI } from "../../constants/types";

export const Posts = ({ data }: postsI) => {
  const posts = data.map((post: postI) => (
    <Post
      key={post.id}
      title={post.attributes.title}
      content={post.attributes.content}
      date={post.attributes.date}
    />
  ));

  return <section>{posts}</section>;
};

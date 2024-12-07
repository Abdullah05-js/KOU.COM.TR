import React from "react";
import { Post } from "./Post";

export const Posts = ({ PostsArray }) => {
  const ReturnPosts = PostsArray.pages.map((page) => {
    return page.data.map((e) => {
      return (
        <Post
          KEY={e._id}
          tag={e.Role}
          posted_at={e.date}
          src={e.profilePhoto}
          name={e.UserName}
          UserPhoto={e.UserPhoto}
          content={e.content}
          likes={e.likes}
          comments={e.comments}
          shares={e.shares}
          views={e.views}
          body_image={e.img}
        />
      );
    });
  });

  return ReturnPosts;
};

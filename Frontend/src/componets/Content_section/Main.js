import React, { useCallback } from "react";
import { CreatePost } from "./CreatePost";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Posts } from "./Posts";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Post } from "./Post";
import useGetPosts from "./useGetPosts";

const Main = () => {
  const [BorderB, SetBorderB] = useState("Explore");
  const [CreatedPost, SetCreatedPost] = useState(null);
  const token = JSON.parse(localStorage.getItem("data")).token;
  const { data, error, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetPosts({ link: "api/post", key: "posts", token: token });
  const Skeleton_model = useCallback(
    () => (
      <div className="flex justify-center items-center p-7">
        <Spinner label="Loading ....." color="success" labelColor="success" />
      </div>
    ),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      //!isFetchingNextPage added this to make it fetch once 
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 300
        &&
        !isFetchingNextPage
      ) {
        console.log("hi");
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (window) window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, isFetchingNextPage]);

  return (
    <div className=" min-w-[672px]">
      <div className="sticky top-0 z-40 flex justify-around bg-black  border-b-2 border-green-300 p-2  ">
        <Button
          value={"Explore"}
          onPress={(e) => {
            SetBorderB("Explore");
          }}
          className={`h-14  text-white rounded-md bg-black font-bold ${
            BorderB === "Explore" ? "border-b-3 border-green-400" : ""
          } `}
        >
          Explore
        </Button>
        <Button
          value={"Following"}
          onPress={(e) => {
            SetBorderB("Following");
          }}
          className={`h-14  text-white rounded-md bg-black font-bold ${
            BorderB === "Following" ? "border-b-3 border-green-400" : ""
          } `}
        >
          Following
        </Button>
      </div>

      <div>
        <CreatePost setPostsArray={SetCreatedPost} />
        {CreatedPost && (
          <Post
            KEY={CreatedPost._id}
            tag={CreatedPost.Role}
            posted_at={CreatedPost.date}
            UserPhoto={CreatedPost.UserPhoto}
            name={CreatedPost.UserName}
            content={CreatedPost.content}
            likes={CreatedPost.likes}
            comments={CreatedPost.comments}
            shares={CreatedPost.shares}
            views={CreatedPost.views}
            body_image={CreatedPost.img}
          />
        )}
        {isLoading || <Posts PostsArray={data} />}
        {isLoading && Skeleton_model()}
        {isFetchingNextPage && Skeleton_model()}
      </div>
    </div>
  );
};

export default Main;

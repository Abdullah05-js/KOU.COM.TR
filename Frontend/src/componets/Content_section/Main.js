import React from "react";
import { CreatePost } from "./CreatePost";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Posts } from "./Posts";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";
import FetchData from "./FetchData";
const Main = () => {
  const [BorderB, SetBorderB] = useState("Explore");

  let { data, error, isError, isLoading, fetchNextPage , isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: FetchData,
    retry: 2,
    initialPageParam: 0,
    getNextPageParam: (lastpage) => lastpage.nextPage,
  });

  console.log(data)
  const Skeleton_model = () => {
    return (
      <div className="flex justify-center items-center p-7">
        <Spinner label="Loading ....." color="success" labelColor="success" />
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight + 700 >=document.documentElement.scrollHeight) {
        //bittişten 700px önce fetch yapıyoruz
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (window) window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage]);

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
        <CreatePost setPostsArray={data} />

        {isLoading || <Posts  PostsArray={data} />}
        {isLoading  && Skeleton_model()}
        {isFetchingNextPage && Skeleton_model()}
      </div>
    </div>
  );
};

export default Main;

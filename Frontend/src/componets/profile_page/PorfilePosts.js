import React from "react";
import {useEffect} from "react";
import { Spinner } from "@nextui-org/spinner";
import useGetPosts from "../Content_section/useGetPosts";
import { Posts } from "../Content_section/Posts";
export const PorfilePosts = () => {
  const token = JSON.parse(localStorage.getItem("data")).token
  const { data, error, isError, isLoading, fetchNextPage,isFetchingNextPage} =useGetPosts({link:"api/profile",key:"profile",token:token});

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
        window.scrollY + window.innerHeight  >=
        document.documentElement.scrollHeight-300
      ) {
        //bittişten 700px önce fetch yapıyoruz
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (window) window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage]);


  return <>{isLoading || isFetchingNextPage ? Skeleton_model() : <Posts PostsArray={data}/> || <h1 className="text-white text-center">You have no Posts Available</h1>}</>;
};

import React from "react";
import {useEffect} from "react";
import { Spinner } from "@nextui-org/spinner";
import useGetPosts from "../Content_section/useGetPosts";
import { Posts } from "../Content_section/Posts";
export const PorfilePosts = () => {
  const { data, error, isError, isLoading, fetchNextPage} =useGetPosts({link:"api/post",key:"profile"});

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


  return <>{isLoading ? Skeleton_model() : <Posts PostsArray={data}/> && <h1 className="text-white text-center">You have no Posts Available</h1>}</>;
};

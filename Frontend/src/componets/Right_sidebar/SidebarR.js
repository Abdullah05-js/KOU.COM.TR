import React from "react";
import { Input } from "@nextui-org/input";
import { User } from "@nextui-org/user";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
// import MarketImage from '/home/thodex/Desktop/website/src/images/MarketPlace.png'
import { useEffect } from "react";
import { Spinner } from "@nextui-org/spinner";
import axios from "axios";
import market from "../../images/MarketPlace.png"
let cancelAxios = null;

export const SidebarR = () => {
  const [PostsArray, setPostsArray] = useState([]);

  const [Load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("https://tarmeezacademy.com/api/v1/posts?limit=6", {
        cancelToken: new axios.CancelToken((c) => {
          cancelAxios = c;
        }),
      })
      .then((Response) => {
        setPostsArray(Response.data.data);
        console.log(Response);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      console.log("cancleing ");
      cancelAxios();
    };
  }, []);

  const Skeleton_model = () => {
    return (
      <div className="flex justify-center items-center p-7">
        <Spinner label="Loading ....." color="success" labelColor="success" />
      </div>
    );
  };

  const ReturnUsers = PostsArray.map((user) => {
    return (
      <li key={user.id} className="p-3 flex justify-between ">
        <User
          name={
            user.author.name.length > 10
              ? `${user.author.name.slice(0, 9)}...`
              : user.author.name
          }
          description={
            user.author.username.length > 10
              ? `${user.author.username.slice(0, 9)}...`
              : user.author.username
          }
          avatarProps={{ src: user.author.profile_image }}
          className="text-white"
        />
        <Button
           variant="bordered"
          size="sm"
          className="  text-white font-bold text-center "
        >
          Follow
        </Button>
      </li>
    );
  });

  return (
    <div className="sticky top-0 z-40 flex flex-col justify-start items-center min-w-80  h-screen border-l-2 border-solid border-green-300 ">
      <ul className="flex flex-col">
        <li>
          <Input
            color="success"
            type="email"
            label="Search"
            placeholder="abdullah han"
            labelPlacement="inside"
            variant="bordered"
            className="min-w-52 w-60 pt-4 text-white "
          />
        </li>
        <li className="min-w-52 w-60 rounded-lg">
          <h3 className="text-center p-2 font-bold text-white">New Friends?</h3>

          <Divider className="bg-white " />

          <ul className="flex flex-col justify-center">
            {Load ? Skeleton_model() : ReturnUsers}

            <Button
               variant="bordered"
              size="sm"
              className="font-bold text-center my-2 text-xl text-white h-10"
            >
              See More
            </Button>
          </ul>
        </li>

        <li className="pt-2">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-2 border-solid border-green-300 "
          >
            <Image
              alt="Woman listing to music"
              isZoomed
              className="object-cover "
              height={250}
              src={market}
              width={250}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Market Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </li>
      </ul>
    </div>
  );
};

import React, { useState } from "react";
import { WebsiteIcon } from "../../svgs/Icon";
import { Button } from "@nextui-org/button";
import { HomeIcon } from "../../svgs/Icon";
import { SearchIcon } from "../../svgs/Icon";
import { MessagesIcon } from "../../svgs/Icon";
import { Tooltip } from "@nextui-org/tooltip";
import { PostIcons, MarketIcon } from "../../svgs/Icon";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Badge } from "@nextui-org/badge";
import { Link } from "react-router-dom";
// import Ferdi from '/home/thodex/Desktop/website/src/images/trump.jpeg'
import { CreatePost } from "../Content_section/CreatePost";

export const SidebarL = () => {
  const [isOpen, setisOpen] = useState(false);

  const data = localStorage.getItem("data");

  const User = JSON.parse(data);

  const handleModelOpen = () => {
    document.body.style.overflow = "hidden";
    setisOpen(true);
  };

  const CreatePostModal = () => {
    const handleClick = (e) => {
      if (e.target.id === "modal") 
      {
        document.body.style.overflow = "auto";
        setisOpen(false);
      }
    };

    return (
      <div
        backdrop={"blur"}
        className={`${
          isOpen
            ? "flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm   z-50 w-screen min-h-screen "
            : "hidden"
        }  `}
        id="modal"
        onClick={handleClick}
      >
        <div className=" flex flex-col justify-center items-center bg-black border-2 border-green-300 rounded max-h-96 min-w-[700px]">
          <h1 className=" text-white font-extrabold text-2xl ">Create Post</h1>
          <div className="overflow-auto">
            <CreatePost />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col justify-start items-center w-72  px-2  h-screen border-r-2 border-solid border-green-300  ">
      <CreatePostModal />
     
        <WebsiteIcon />
      

      <ul className="flex flex-col gap-4">
        <li className="transition ease-in-out duration-1000 hover:translate-x-6">
          <Link to={"/home"}>
            <Button
              color="primary"
              variant="light"
              startContent={
                <Badge
                  content={"99+"}
                  color="success"
                  variant="solid"
                  placement="top-left"
                >
                  <HomeIcon />
                </Badge>
              }
              size="lg"
              className=" text-3xl    text-white   h-20"
            >
              Home
            </Button>
          </Link>
        </li>
        <li className="transition ease-in-out duration-1000 hover:translate-x-6">
        <Link to={"/home/Search"}>
          <Button
            color="primary"
            variant="light"
            startContent={<SearchIcon />}
            size="lg"
            className=" text-3xl    text-white   h-20"
          >
            Search
          </Button>
          </Link>
        </li>
        <li className="transition ease-in-out duration-1000 hover:translate-x-6">
          <Link to={"/chat"}>
            <Button
              color="primary"
              variant="light"
              startContent={
                <Badge
                  content={"100"}
                  color="success"
                  variant="solid"
                  placement="top-right"
                >
                  <MessagesIcon />
                </Badge>
              }
              size="lg"
              className=" text-3xl  text-white  h-20"
            >
                Chats
            </Button>
          </Link>
        </li>
        <li className="transition ease-in-out duration-1000 hover:translate-x-6">
          <Button
            color="primary"
            variant="light"
            startContent={
              <Badge
                content={"5"}
                color="success"
                variant="solid"
                placement="top-right"
              >
                <MarketIcon />
              </Badge>
            }
            size="lg"
            className=" text-3xl  text-white    h-20"
          >
            Market
          </Button>
        </li>
        <li className="transition ease-in-out duration-1000 hover:translate-x-6">
          <Button
            variant="bordered"
            startContent={<PostIcons />}
            size="lg"
            className=" text-3xl   text-white  font-bold text-center ml-4"
            onClick={handleModelOpen}
          >
            Post
          </Button>
        </li>

        <li>
          <Link to={"/home/profile"}>
            <Tooltip color={"success"} content={"Profile"}>
              <Card className="min-w-48  max-w-52    bg-black border-2 border-solid  rounded-md">
                <CardHeader className=" flex-col items-start ">
                  <h4 className="font-bold text-large m-1 text-white">
                    {User.UserName}
                  </h4>
                  <Divider className="bg-white" />
                </CardHeader>
                <CardBody className="overflow-visible py-2 ">
                  <Image
                    isBlurred
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={User.img}
                    width={270}
                    height={200}
                  />
                </CardBody>
              </Card>
            </Tooltip>
          </Link>
        </li>
        <li>
        <Tooltip color={"danger"} content={"About us"}>
            <p className="p-6 text-white">&copy;2024 KOU inc.</p>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

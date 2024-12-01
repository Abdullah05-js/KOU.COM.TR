import React from "react";
// import {TextArea} from './TextArea'
import { EmojiIcon, ImageIcon, PostIcons } from "../../svgs/Icon";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@nextui-org/spinner";


// let validToken = "128202|eg0sxt0FCRa1oBFsP0SVTf7KV5zgPMmWfFnHm7gF"
export const CreatePost = ({ setPostsArray }) => {
  const navigate = useNavigate();
  const [FilesApi, setFilesApi] = useState([]);

  const [Load, SetLoad] = useState(false);

  const [isPikerOn, setisPikerOn] = useState(false);

  const [Row, setRow] = useState(1);

  const [TextValue, setTextValue] = useState("");

  const user = JSON.parse(localStorage.getItem("data"));

  const handlePost = () => {
    const createPost = async () => {
      const data = JSON.parse(localStorage.getItem("data"));
      try {
        SetLoad(true);
        const Response = await axios.post("http://localhost:5000/api/post", {
          token: data.token,
          content: TextValue,
          img: FilesApi[0],
          Roles: false,
        });
        setTextValue("");
        setRow(1);
        setFilesApi([]);
        console.log("from post requestt",Response.data );
        SetLoad(false);
        setPostsArray(Response.data)
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    createPost();
  };

  const handleFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/quicktime";
    input.setAttribute("multiple", "");
    input.click();
    input.onchange = async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setFilesApi([...FilesApi, reader.result]);
      });
      reader.readAsDataURL(file);
    };
  };

  const handleDelete = (index) => {
    console.log("sdc", index);
    let NewFiles = [...FilesApi];

    NewFiles.splice(index, 1);

    setFilesApi(NewFiles);
  };

  const Returnİmages = FilesApi.map((file, index) => {
    return (
      <Button
        key={index}
        isIconOnly
        onClick={() => {
          handleDelete(index);
        }}
        aria-label="add emoji"
        className="h-[330px] w-[330px] m-2 overflow-hidden bg-black border-2 border-green-300"
      >
        <Image width={330} height={330} className="object-cover" src={file} />
      </Button>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center  border-b-2 border-green-300">
      <div className="flex flex-row gap-4">
        <User
          as={"button"}
          className="text-white font-extrabold transition-transform pb-14"
          name={user.UserName}
          avatarProps={{
            src: user.img,
          }}
        />

        <div className="flex flex-col justify-start  gap-2 ">
          <textarea
            value={TextValue}
            cols={"40"}
            rows={`${Row}`}
            className={`p-3 mt-10 bg-black text-white  overflow-y-scroll `}
            onChange={(e) => {
              setTextValue(e.target.value);
              e.target.value.length + 2 >= Row * 43
                ? setRow((v) => v + 1)
                : console.log();

              if (TextValue.length < 30) setRow(1);
            }}
            placeholder="Ders Notu var mı???"
          ></textarea>

          <div className="flex flex-row justify-between ">
            <div className="flex flex-row gap-x-2">
              <Button
                isIconOnly
                color="success"
                aria-label="add image"
                onClick={handleFile}
              >
                <ImageIcon width={24} height={24} />
              </Button>

              <div>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    <Button
                      isIconOnly
                      color="success"
                      aria-label="add emoji"
                      className="flex flex-col"
                      onClick={() => {
                        setisPikerOn(!isPikerOn);
                      }}
                    >
                      <EmojiIcon width={24} height={24} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="rounded-3xl bg-black border-3 border-green-300">
                    <Picker
                      data={data}
                      onEmojiSelect={(e) => {
                        setTextValue(TextValue + e.native);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {Load ? (
              <Spinner />
            ) : (
              <Button
                variant="shadow"
                startContent={<PostIcons />}
                size="md"
                className=" text-3xl mb-8   text-white bg-green-500  font-bold text-center ml-4"
                onClick={() => {
                  handlePost();
                }}
              >
                Post
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">{Returnİmages}</div>
    </div>
  );
};

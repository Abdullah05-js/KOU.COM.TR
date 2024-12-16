import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { User } from "@nextui-org/user";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCallback } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const Search = () => {
  const [Query, setQuery] = useState("");
  const [SearchList, setSearchList] = useState([]);
  const [AllSearchList, setAllSearchList] = useState({
    "abdullah han": [
      { name: "abdullah han ", userID: "230229017" },
      { name: "selçuk öz ", userID: "230229017" },
      { name: "arif can güneş", userID: "230229017" },
      { name: "sefa selim bayrak", userID: "230229017" },
    ],
  });
  const [isFetching, setisFetching] = useState(false);

  // fetch fonksiyonu

  const GetSearchedData = useCallback(async (signal) => {
    try {
      const token = JSON.parse(localStorage.getItem("data")).token
      const response = await axios.get(
        "http://localhost:5000/api/search",
        {
        signal:signal,
        params:{
          Query,
          token
        }
        }
      );
      setSearchList(response.data);
      const newAllData = { ...AllSearchList };
      newAllData[Query] = response.data;
      setAllSearchList(newAllData);
    } catch (error) {
      console.log(error);
    } 
  }, [AllSearchList, Query]);

  // isSearched method is to control if this query is alerdy searched to not make request

  const isSearched = useCallback(
    (query,signal) => {
      setisFetching(false)
      setSearchList([])
      AllSearchList[query]
      ? setSearchList(AllSearchList[query])
      : GetSearchedData(signal)
    },
    [AllSearchList, GetSearchedData]
  );

  const returnList = SearchList.map((e) => {
    return (
      <Link to="https://x.com/jrgarciadev" size="sm">
        <User
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
          }}
          name={e.name}
          description={<p className="text-gray-400">@{e.userID}</p>}
          className="text-white"
        />
      </Link>
    );
  });

  const Skeleton_model = [1, 2, 3].map(() => {
    return (
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12  animate-pulse" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg  animate-pulse" />
          <Skeleton className="h-3 w-4/5 rounded-lg  animate-pulse" />
        </div>
      </div>
    );
  });

  console.log(Query)

  useEffect(() => {
    //to cancel the request or abort it implment this to others canceltoken depreceted
    const controler = new AbortController();

    const handler = setTimeout(
      () => (Query === "" ? setSearchList([]) : isSearched(Query,controler.signal)),
      700
    );

    return () => {
      clearTimeout(handler);
      controler.abort();
    };
  }, [Query, isSearched]);

  return (
    <div className="min-h-screen min-w-[672px] flex flex-col justify-center items-center gap-7">
      <Input
        autoComplete="email"
        className="text-white min-w-56 max-w-96"
        value={Query}
        onChange={(e) => {
          setisFetching(true)
          setQuery(e.target.value);
        }}
        type="text"
        variant={"bordered"}
        color="success"
        label="Search"
        placeholder="Abdullah han"
      />

      <div className="min-w-96 h-[570px]  flex flex-col justify-start items-start overflow-y-auto gap-5">
        {isFetching ? Skeleton_model : returnList}
      </div>
    </div>
  );
};

export default Search;

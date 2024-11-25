import React from "react";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const { id } = useParams();

  return <div className="text-green-300">{id}</div>;
};

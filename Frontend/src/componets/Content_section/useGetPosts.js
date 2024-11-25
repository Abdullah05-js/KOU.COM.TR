import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
const FetchData = async ({ pageParam }) => {
  const data = await axios.get(`http://localhost:5000/api/post`, {
    params: { pageParam },
  });
  return data.data;
};

const useGetPosts = () => {
  const { data, error, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: FetchData,
      retry: 2,
      initialPageParam: 0,
      getNextPageParam: (lastpage) => lastpage.nextPage,
      refetchOnMount: false,
      staleTime: 5000,
    });

  return {
    data: data,
    error: error,
    isError: isError,
    isLoading: isLoading,
    fetchNextPage: fetchNextPage,
    isFetchingNextPage: isFetchingNextPage,
  };
};
export default useGetPosts;

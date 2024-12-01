import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

//you need to pace a fucntion directliy to avoid unneccesry re renders
const useGetPosts = ({key,link}) => {
  const { data, error, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [key],
      queryFn: async ({ pageParam}) => {
        const data = await axios.get(`http://localhost:5000/${link}`, {
          params: { pageParam },
        })
        return data.data
      },
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

import axios from "axios";
const FetchData = async ({ pageParam }) => {
  const data = await axios.get(`http://localhost:5000/api/post`, {
    params: { pageParam },
  });
  return data.data;
};
export default FetchData;

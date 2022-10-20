import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",

  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "7c4122c1e5msh913118b8c475393p13c4e7jsnb0a7a3d87802",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
// const options = {
//   method: "GET",

//   params: {
//     relatedToVideoId: "7ghhRHRP6t4",
//     part: "id,snippet",
//     type: "video",
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

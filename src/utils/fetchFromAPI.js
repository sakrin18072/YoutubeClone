import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const BASE_URL_2 = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': '37a5e749e4msh81aea33759bdce6p1ea56cjsn6d27c38a583c',
    'X-RapidAPI-Host': ''
  }
  
};
export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
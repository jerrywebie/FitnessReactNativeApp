
import config from '../utility/config';
// exercise options
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.rapid_api_key,
     // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com', 
     'X-RapidAPI-Host':'youtube-search-and-download.p.rapidapi.com',
    }
  };

// fetch data
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
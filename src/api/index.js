import axios from "axios"; //to make api request


const url='https://covid19.mathdro.id/api';
const newsUrl='http://newsapi.org/v2/top-headlines?country=in&apiKey=76fb0d48954f4ea2881ac3ceffc082c9';


export const fetchData = async (country) => {
    let changeableUrl = url;
  
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };
  
  export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };
  
  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };

  export const fetchNewsData = async () => {
    try {
      const { data } = await axios.get(newsUrl);
  
      return data.articles;
    } catch (error) {
      return error;
    }
  };


 
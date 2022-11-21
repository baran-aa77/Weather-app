import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org';
const apiKey = 'f165eb3ac71fb18e5bbcbe5de1478baa';

export const getWeatherData = async (cityname) => {

        const {data} = await axios.get(baseUrl + `/data/2.5/weather?q=${cityname}&appid=${apiKey}&lang=fa`);
        return data;
}

export const getWeatherDataFiveDays = async (cityname) => {
        const {data} = await axios.get(baseUrl +`/data/2.5/forecast?q=${cityname}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`);
        return data;
}
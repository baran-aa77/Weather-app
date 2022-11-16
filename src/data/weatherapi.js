import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org';
const apiKey = '3344daaf0cc059799507fcc845d340e9\n';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `/data/2.5/weather?q=${cityname}&appid=${apiKey}&lang=fa`);
        return data;
    }catch(error) {
        throw error;
    }
}


export const getWeatherDataFiveDays = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl +`/data/2.5/forecast?q=${cityname}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`);
        return data;
    }catch(error) {
        throw error;
    }
}
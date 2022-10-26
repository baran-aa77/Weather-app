import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '3344daaf0cc059799507fcc845d340e9\n';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}&lang=fa`);
        return data;
    }catch(error) {
        throw error;
    }
}
import axios from "axios";
const baseurl='api.openweathermap.org/data/2.5/forecast?';
const apikey='e0f2eb301ee8ba5f875fe905afbe432d'
export const getweather=async (cityname)=>{
    try{
        const{data}=await axios.get(baseurl+`q=${cityname}&appid=${apikey}`);
        return data;
    }
    catch(error){
        throw error;
    }
}
export default api
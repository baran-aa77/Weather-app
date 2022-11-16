import React from 'react';
import { getWeatherDataFiveDays } from '../../data/weatherapi';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
const daysIndex = [0, 8, 16, 24, 32]
const SinglePage=()=>{
    const {city} = useParams()
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    const handleGetData = async () => {
        const data = await getWeatherDataFiveDays (city)
        setCityWeatherFuture(data)
        console.log(cityWeatherFuture)
    }

    useEffect(() => {
        handleGetData()
    }, [])
    return (
        <div style={{display:'flex',textAlign:'center',flexDirection:'column',gap:'10px',border:'1px solid purple',width:'40%',margin:'auto',marginTop:'20px'}}>
            <div>
                {city}
            </div>
            <div>
                {daysIndex.map(index => 
                    <div>
                        {cityWeatherFuture?.list?.[index]?.main?.temp}
                    </div>
                    )}
            </div>
        </div>
    
    )
}

export default SinglePage
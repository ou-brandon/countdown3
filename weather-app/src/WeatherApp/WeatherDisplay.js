import React from 'react';
import { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather.js';
import DailyWeather from './DailyWeather.js'
import Stack from '@mui/material/Stack';
import HourlyWeather from './HourlyWeather.js';
import { Box } from '@mui/material';
//import './App.css';

const WeatherDisplay = (props) => {
    const [weatherAPI, setWeatherAPI] = useState("");
    const [data, setData] = useState(null); 

    const API_KEY = process.env.REACT_APP_api_key
    useEffect(() => {
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + props.latitude + "&lon=" + props.longitude + "&appid=" + API_KEY;
        setWeatherAPI(url);
        fetch(url)
        .then((res)=>res.json())
        .then((res) => {console.log(res); setData(res)});
    }, [props.latitude, props.longitude, API_KEY])
    if(weatherAPI && data){
        return (
            <>
                <Box sx={{bgcolor: '#F7F7F7'}}>
                    
                    <Stack
                        direction="column"
                        spacing={2}
                    >
                        <CurrentWeather current={data.current}/>
                        <HourlyWeather hourly={data.hourly}/>
                        <DailyWeather daily={data.daily}/>
                    </Stack> 
                </Box>
                   
                
            </>
        );
    }
    else{
        <h2>Loading...</h2>
    }
    
}

export default WeatherDisplay;
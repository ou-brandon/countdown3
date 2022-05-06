import React from 'react';
//import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './weather.css';
//import './App.css';
//import { Icon } from '@mui/material';
import * as utils from './utils'
import { Grid } from '@mui/material';
//import { palette } from '@mui/system';

const CurrentWeather = (props) => {
    /*
    const imageLink = 'http://openweathermap.org/img/wn/'
    const imageEnd = '@2x.png'
    const createImageLink = (value) => {
        return imageLink + value + imageEnd;
    }
    
    const kToF = (temp) => {
        return (((9.0/5.0) * (parseFloat(temp) - 273.15)) + 32).toFixed(1);
    }
    const toUpper = (phrase) => {
        return phrase.split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
    }

    */
    return(
        <div class='current-weather'>
            <Card variant='outlined' alignItems='center' sx={{padding: 2, boxShadow: 3, ':hover': {boxShadow: 10}}}>
                <Typography variant='h4'>Current Weather</Typography>
                <CardContent>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={3}>
                                <Typography variant='h6'>{props.long}, {props.lat}</Typography>
                                <Typography variant='caption'>Longitude, Latitude</Typography> 
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='h6'>Temperature: {utils.kToF(props.current.temp)} °F</Typography> 
                                <Typography variant='subtitle'>(Feels like {utils.kToF(props.current.feels_like)} °F)</Typography> 
                            </Grid>
                            <Grid item xs={1}>
                                <CardMedia component="img" image={utils.createImageLink(props.current.weather[0].icon)}/>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography  variant='subtitle'>{utils.toUpper(props.current.weather[0].description)} </Typography>
                            </Grid>
                        </Grid>
                    

                </CardContent>
            </Card>
            
            
        </div>
    );
}

export default CurrentWeather;
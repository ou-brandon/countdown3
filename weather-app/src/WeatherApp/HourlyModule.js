import React from 'react';
//import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
//import Accordion from '@mui/material/Accordion';
import * as utils from './utils'
import { CardMedia } from '@mui/material';
//import { List } from '@mui/material';
import { Card } from '@mui/material';

const HourlyModule = (props) => {
    const time = new Date(props.info.dt * 1000).toLocaleTimeString("en-US");

    return (
        <>
            <Card>

                <Grid container spacing={0} sx={{padding:2}}>
                    <Grid item xs={2}>
                        <Typography variant='subtitle'>{utils.removeSec(time)}</Typography>      
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h6'>{utils.kToF(props.info.temp)} °F</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <CardMedia style={{width:50}} component="img" image={utils.createImageLink(props.info.weather[0].icon)}/> 
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6'>{utils.toUpper(props.info.weather[0].description)}</Typography>  
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6'> {props.info.humidity}%</Typography>
                        <Typography variant='caption'>Humidity</Typography>
                    </Grid>
                    
                </Grid>
               
            </Card>        
                             
                    
                    
                {/* 
                <Card variant='outlined'>
                    <CardContent>
                        <List>
                            <ListItem>
                                words
                                
                            </ListItem>

                        </List>
                    </CardContent>
                </Card>
                */}
            
            
        </>

    );
}

export default HourlyModule;
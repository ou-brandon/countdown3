import React from 'react';
//import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import * as utils from './utils'
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CardMedia } from '@mui/material';
import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';

const DailyModule = (props) => {
    
    const date = new Date(props.info.dt * 1000).toDateString({month: "short", day: "numeric"});
    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <Typography variant='subtitle'>{utils.removeYear(date)}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='h6'>{utils.kToF(props.info.temp.morn )} °F</Typography> 
                            <Typography variant='caption'>Morning</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <ArrowForwardIosIcon/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='h6'>{utils.kToF(props.info.temp.day )} °F</Typography> 
                            <Typography variant='caption'>Day</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <ArrowForwardIosIcon/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='h6'>{utils.kToF(props.info.temp.eve )} °F</Typography> 
                            <Typography variant='caption'>Evening</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <ArrowForwardIosIcon/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='h6'>{utils.kToF(props.info.temp.night )} °F</Typography> 
                            <Typography variant='caption'>Night</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={1}>
                            <CardMedia style={{width:50}} component="img" image={utils.createImageLink(props.info.weather[0].icon)}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant='h6'>{utils.toUpper(props.info.weather[0].description)}</Typography> 
                        </Grid>
                        
                    </Grid>
                        
                    
                </AccordionSummary>
            </Accordion>
        </>

    );
}

export default DailyModule;
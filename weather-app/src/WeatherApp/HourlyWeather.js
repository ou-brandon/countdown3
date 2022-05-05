import React from 'react';
//import { useState, useEffect } from 'react';
//import Stack from '@mui/material/Stack';
//import DailyModule from './DailyModule';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';
import HourlyModule from './HourlyModule';
import { AccordionDetails } from '@mui/material';

//import './App.css';

const HourlyWeather = (props) => {
    if(props.hourly){
        return(
            <>
                <Accordion sx={{boxShadow: 3, ':hover': {boxShadow: 10}}}>
                <AccordionSummary 
                    expandIcon={<ExpandMore/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Hourly Weather</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.hourly.map((obj) => <HourlyModule info={obj}/>)}
                    </AccordionDetails>
                    
                    
                </Accordion>
                
            </>
        );
    }
    else{
        return <h6>Loading...</h6>
    }
    
}

export default HourlyWeather;
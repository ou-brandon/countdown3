import React from 'react';
import { useState, useEffect } from 'react';
//import './App.css';
import WeatherDisplay from './WeatherDisplay';
import {useRef} from "react"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import './weather.css'
import MostPopular from './News/MostPopular';
import { Box } from '@mui/system';
import { Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';

const LocationInput = (props) => {

    const [zip, setZip] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [API, setAPI] = useState(null);
    const zipRef = useRef();
    const countryRef = useRef();
    const API_KEY = process.env.REACT_APP_api_key

    const handleSubmit = () => {
        setZip(zipRef.current.value); 
        setCountryCode(countryRef.current.value);
        console.log(zip + " " + countryCode);
        //changeURL();
    }

    useEffect(()=>{
        if(zip && countryCode){
            let url = "http://api.openweathermap.org/geo/1.0/zip?zip=";
            url += zip + ',' + countryCode + '&appid=' + API_KEY;
            setAPI(url);
            fetch(API)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setLongitude(res.lon);
                setLatitude(res.lat);
            });
        }
        
    }, [zip, countryCode, API, API_KEY])

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
      
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Get My Weather!" {...a11yProps(0)} />
                <Tab label="Get the Most Popular News!" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='uncover-tab'>
                    <div className='sidebar'>
                        <Typography variant="h2" className="title">My Weather</Typography>
                        <br></br>
                        <br></br>
                        <TextField color='secondary' sx={{ input: {color: 'white'}}} label="Zip Code" variant="outlined" defaultValue={zip} inputRef={zipRef} InputLabelProps={{style: {color: 'white'}}}/>
                        <br></br>
                        <br></br>
                        <TextField color='secondary' sx={{ input: {color: 'white'}}} label="Country Code" variant="outlined" defaultValue={countryCode} inputRef={countryRef} InputLabelProps={{style: {color: 'white'}}} />
                        <br></br>
                        <br></br>
                        <Button variant='contained' onClick={handleSubmit}>Get My Weather</Button>
                        <br></br>
                        <br></br>
                    </div>
                    <div className='non-sidebar' >
                            {longitude && latitude && <WeatherDisplay longitude={longitude} latitude={latitude} />}
                    </div>
                </div>
                
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='uncover-tab'>
                    <MostPopular/>
                </div>

            </TabPanel>
          </Box>
        );
    /*
    return(
        <>
            <div>
                <div className='sidebar'>
                    <Typography variant="h2" className="title">My Weather</Typography>
                    <br></br>
                    <br></br>
                    <TextField color='secondary' sx={{ input: {color: 'white'}}} label="Zip Code" variant="outlined" defaultValue={zip} inputRef={zipRef} InputLabelProps={{style: {color: 'white'}}}/>
                    <br></br>
                    <br></br>
                    <TextField color='secondary' sx={{ input: {color: 'white'}}} label="Country Code" variant="outlined" defaultValue={countryCode} inputRef={countryRef} InputLabelProps={{style: {color: 'white'}}} />
                    <br></br>
                    <br></br>

                    <Button variant='contained' onClick={handleSubmit}>Get My Weather</Button>
                    <br></br>
                    <br></br>
                </div>
                <div id='weather-app'>
                        {longitude && latitude && <WeatherDisplay longitude={longitude} latitude={latitude} />}
                </div>
                <div className='non-sidebar'>
                    <div>
                        <MostPopular/>
                    </div>
                </div>
                
                    
            </div>
        </>
        
         
    );
    */
}

export default LocationInput;
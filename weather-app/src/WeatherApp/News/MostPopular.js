import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsModule from './NewsModule.js';
import { Grid } from '@mui/material';

const MostPopular = (props) => {

    
    //const API_SECRET = process.env.REACT_APP_api_key_news_secret
    const API_KEY = process.env.REACT_APP_api_key_news
    const [news, setNews] = useState(null);
    const numArticles = 5;
    useEffect(()=>{
        console.log("aaaaaaaaaaaa")
        const api_url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key='
        const url = api_url + API_KEY;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setNews(res.results);
            console.log(res.results);
        });
        
    }, [API_KEY]);

    return(
        <div id='news'>
            <Typography variant='h3'>News: Most Popular</Typography>
            <Grid container spacing={4}>
                {news && (news.slice(0, numArticles)).map((obj) => <NewsModule info={obj}/>)}
            </Grid>
            
        </div>

    )
}

export default MostPopular;
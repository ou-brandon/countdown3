import React from 'react';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { ListItem } from '@mui/material';
import { Grid } from '@mui/material';

const NewsModule = (props) => {
    
    return (
        <>
            <Grid item xs={6}>
                <ListItem>
                    <CardActionArea href={props.info.url} >
                        <Card sx={{display: 'flex', boxShadow: 3, height: '400px', ':hover': {boxShadow: 13}}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column'}} margin='auto'>
                                <CardHeader title={props.info.title} subheader={props.info.byline}/>  
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    {props.info.abstract}
                                </CardContent>
                            </Box>
                                
                            
                                <CardMedia component="img" image={props.info.media[0]["media-metadata"][2].url}/>
                            
                                
                        </Card>
                    </CardActionArea>
                </ListItem>
            </Grid>
            
        </>
        
    );
}

export default NewsModule;
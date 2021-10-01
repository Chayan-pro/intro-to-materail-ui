import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4742d114076742d182952142ddb3269e')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[]);
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              articles?.map(article => <Grid item xs={2} md={4}> <News article={article}></News> </Grid>)
            }
          </Grid>
        </Box>
      </div>
    );
};

export default Newspaper;
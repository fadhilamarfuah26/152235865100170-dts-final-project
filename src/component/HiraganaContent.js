import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as React from 'react';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const HiraganaContent = ({ hiragana }) => {
  return (
    <Card id={hiragana.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${hiragana.poster_path}`}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            <Link to="/detailpage">
            {hiragana.name}
            </Link>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {hiragana.japanese}
          </Typography>
          
        </CardContent>
      </Box>
    </Card>
  );
}

export default HiraganaContent;
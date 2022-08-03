import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as React from 'react';



const HiraganaContent = ({ hiragana }) => {
  return (
    <Card id={hiragana.id} sx={{ display: 'flex', width: 400, margin: 5 }}>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            <Link>
            {hiragana.romaji}
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
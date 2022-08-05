import { Box } from '@mui/material';
import _ from 'lodash';
import { useState, useEffect } from "react";
import rapid from '../api/rapid'


const HomeContent = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await rapid.get(
          'https://japanese-alphabet.p.rapidapi.com/api/hiragana'
        );
        setData(response.data.result);
      } catch (error) {
        console.log(error);
    }
  }
    getData();
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      mt: 5,
  }}>
    
    <div>
      <h1>API Posts</h1>
        {data &&
          (_.mapValues(data,([ name, content ]) => (
            <ul><li key={[name.value]}>
              <h3>{[content.value]}</h3>
            </li></ul>
          )))}
      
    </div>
    </Box>
  );
}
export default HomeContent
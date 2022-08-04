import { Box } from '@mui/material';
import _ from 'lodash';
import { useState, useEffect } from "react";
import rapid from '../api/rapid'


const HomeContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await rapid.get(
          'https://japanese-alphabet.p.rapidapi.com/api/hiragana'
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
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
      {loading && (<div>A moment please...</div>)}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      
        {data &&
          _.mapValues(data,([ name, content ]) => (
            <ul><li key={[name.value]}>
              <h3>{[content.value]}</h3>
            </li></ul>
          ))}
      
    </div>
    </Box>
  );
}
export default HomeContent
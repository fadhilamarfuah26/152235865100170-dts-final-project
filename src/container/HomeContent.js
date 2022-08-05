import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import rapid from '../api/rapid';
import HiraganaContent from '../components/HiraganaContent';

const HomeContent = () => {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await rapid.get("hiragana");
                setMovies(fetchedMovies.data.results);
                
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    movies.map(movie => (
                        <HiraganaContent key={movie.name} movie={movie}></HiraganaContent>
                    ))
                }
            </Box>
        </Box>
    );
}

export default HomeContent;
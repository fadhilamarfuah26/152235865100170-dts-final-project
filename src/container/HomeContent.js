import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import rapid from '../api/rapid';
import HiraganaContent from '../component/HiraganaContent';

const HomeContent = () => {
    const [hiraganas, setHiragana] = useState([]);
    const [hiraganaReady, setHiraganaReady] = useState(false);

    useEffect(() => {
        const fetchHiragana = async () => {
            try {
                const fetchedHiragana = await rapid.get("hiragana");
                setHiragana(fetchedHiragana.data.results);
                setHiraganaReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchHiragana();
    }, []);

    useEffect(() => {
        if (!hiraganaReady) return;
        
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps


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
                    hiraganas.map(hiragana => (
                        <HiraganaContent key={hiragana.name} hiragana={hiragana}></HiraganaContent>
                    ))
                }
            </Box>
        </Box>
    );
}

export default HomeContent;
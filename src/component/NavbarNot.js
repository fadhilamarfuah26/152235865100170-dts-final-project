import { EmojiEmotions, Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const NavbarNot = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <EmojiEmotions sx={{ display: 'flex', mr: 2 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            mr:2,
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            HOME
                        </Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit',padding:8 }} to="/login">
                            Dashboard
                        </Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit',padding:8 }} to="/register">
                            Sign Up
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default NavbarNot;
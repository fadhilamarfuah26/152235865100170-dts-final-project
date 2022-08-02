import './App.css';
import '@fontsource/josefin-sans'
import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavbarNot from './component/NavbarNot';
import theme from './themes/theme';
import WallbarNot from './component/WallbarNot';
import HomeContent from './container/HomeContent';
const HomeNot = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Homenot">
        <NavbarNot />
        <WallbarNot/>
        <HomeContent/>
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

export default HomeNot;
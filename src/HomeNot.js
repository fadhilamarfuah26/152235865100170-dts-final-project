import './App.css';
import '@fontsource/josefin-sans'
import { ThemeProvider } from '@mui/material';


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
      </div>
    </ThemeProvider>
  );
}

export default HomeNot;
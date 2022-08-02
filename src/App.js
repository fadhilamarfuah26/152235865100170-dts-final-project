import './App.css';
import '@fontsource/josefin-sans'
import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavBar from './component/NavBar';
import theme from './themes/theme';
import WallBar from './component/WallBar';
import HomeContent from './container/HomeContent';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <WallBar/>
        <HomeContent/>
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

export default App;
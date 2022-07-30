import './index.css';


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './container/Login';
import Home from './container/Home';
import Register from './container/Register';
import NotFound from './container/NotFound';
import DetailPage from './container/DetailPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateComponent>
            <App />
          </PrivateComponent>
        }>
          <Route path="/" element={<Home/>} />
        </Route>
        <Route path= "/detailpage" element={<DetailPage/>}/>
        <Route path="login" element={
          <PrivateComponent loginOnly={false}>
            <Login />
          </PrivateComponent>} />
        <Route path="register" element={
          <PrivateComponent loginOnly={false}>
            <Register />
          </PrivateComponent>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
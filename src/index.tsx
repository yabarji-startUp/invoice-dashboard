import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import { Home, CreateInvoice } from './pages';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateInvoice />} />
      {/* <Route path="/page2" element={<Page2 />} /> */}
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

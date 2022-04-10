import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes, HashRouter, Navigate } from 'react-router-dom';
import { Home, CreateInvoice, Login } from './pages';
import { MantineProvider } from '@mantine/core';
import AuthContextProvider from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateInvoice />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </HashRouter>
  );
}

export default App;
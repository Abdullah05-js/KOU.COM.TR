import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RootRouter } from './RootRouter';
import {NextUIProvider } from '@nextui-org/system';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
      <RootRouter />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);



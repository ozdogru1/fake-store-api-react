import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from './context/cart-context/CartContext';
import { DarkModeContextProvider } from './context/dark-mode-context/DarkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

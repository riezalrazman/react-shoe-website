import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import ShoeShopState from './context/ShoeShopState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShoeShopState>
    <HashRouter>
    <App />
    </HashRouter>
    </ShoeShopState>
  
);



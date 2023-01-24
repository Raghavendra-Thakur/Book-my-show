import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom' 
import './index.css';
import App from './App';
import MovieProvider from './context/Movie.Context';
import TVProvider from './context/TV.Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <TVProvider>
        <App />
        </TVProvider>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);



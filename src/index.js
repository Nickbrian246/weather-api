import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import weatherReducer from '../src/store/slice/wheatherApiSlice';

const store = configureStore ( {
  reducer : {
    weatherApi: weatherReducer,
  }
}) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  
  </React.StrictMode>
);

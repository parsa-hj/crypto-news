import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

createRoot(
    
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root')
);

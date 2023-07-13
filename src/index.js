import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Open Sans:300,400,500,600,700',
      'Open Sans:300,400:italic',
    ],
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

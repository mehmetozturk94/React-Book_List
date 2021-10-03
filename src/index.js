import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BookContextProvider from '../src/Contexts/BookContext'
ReactDOM.render(
  <React.StrictMode>
    <BookContextProvider>
    <App />
    </BookContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


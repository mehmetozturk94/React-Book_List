import React from 'react';
import BookContextProvider from './Contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddNewBook from './components/AddNewBook';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <Navbar/>
      <BookList/>
      <AddNewBook/>
      </BookContextProvider>
    </div>
  );
}

export default App;

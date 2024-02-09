import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import MainEdit from './Main/MainEdit';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mainedit' element={<MainEdit />} />
          <Route path='/main' element={<Main />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

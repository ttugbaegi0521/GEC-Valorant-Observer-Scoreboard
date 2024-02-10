import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import './App.css';
import MapBan from './MapBan/MapBan';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/mapban' element={<MapBan />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

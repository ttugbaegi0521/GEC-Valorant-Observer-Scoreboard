import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import MainEdit from './Main/MainEdit';
import './App.css';
import EndScreen from './End Screen/EndScreen';
import EndScreenEdit from './End Screen/EndScreenEdit';
import EndScreenDisplay from './End Screen/EndScreenDisplay';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mainedit' element={<MainEdit />} />
          <Route path='/main' element={<Main />} />
          <Route path='/endscreen' element={<EndScreen />} />
          <Route path='/endscreenedit' element={<EndScreenEdit />} />
          <Route path='/endscreendisplay' element={<EndScreenDisplay />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

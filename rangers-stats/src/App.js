import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Edit from './Edit/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route>
            <Route path='/' element={<Main />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
            <Route path='*' element={<Main />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

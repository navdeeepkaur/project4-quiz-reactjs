import logo from './logo.svg';
import './App.css';
import SingleQues from './singleQues';
import Start from './Start';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='/quiz' element={<SingleQues/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

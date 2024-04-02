import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Mainpage from './Pages/Mainpage';
import Test from './Pages/test';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Mainpage/>} />
        <Route path='homepage' element={<Homepage/>} />
        <Route path='test' element={<Test/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

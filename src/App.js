import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='anime/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NavbarComponent from './components/Navbar';
import { Body } from './styles/AllStyle'

function App() {
  return (
    <BrowserRouter>
      <Body>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='anime/:id' element={<Detail />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NavbarComponent from './components/Navbar';
import { Body } from './styles/AllStyle'
import CollectionList from './pages/CollectionList';
import CollectionDetail from './pages/CollectionDetail';
import SearchComponent from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Body>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='anime/:id' element={<Detail />} />
          <Route path='collection' element={<CollectionList />} />
          <Route path='collection/:id' element={<CollectionDetail />} />
          <Route path='search' element={<SearchComponent />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;

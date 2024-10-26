import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';

function App() {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate('/about');
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route index element={<Shirts />} />
          <Route path='shirts' element={<Shirts />} />
          <Route path='jeans' element={<Jeans />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <button onClick={() => navigate('/about')}>About</button>
       */}
      {/* <button onClick={() => onNavigate()}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button> */}
    </>
  );
}

export default App;

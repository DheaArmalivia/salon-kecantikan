import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    <Footer />
    </>
  );
}

export default App;

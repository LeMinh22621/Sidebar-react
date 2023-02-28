import React from 'react';
import Home from './pages/Home';
import Reports from './pages/Reports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Room from './pages/Room';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/room' element={<Room />}/>
          <Route path='/reports' element={<Reports />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

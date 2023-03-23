import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import Food from './Components/Proyects/Food-PI/Food-PI';
import Gym from './Components/Proyects/Gym-Fit/Gym-Fit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Gym-Fit" element={<Gym />} />
        <Route path="/Food-PI" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

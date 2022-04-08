import { useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import Room from './components/detailroom/Room';

function App() {
  return (
    <Router>
    <div className='app'>
      <Routes>
          <Route path='/' exact  element={<HomePage />}/>
          <Route path='/room/:name/:id' exact  element={<Room />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

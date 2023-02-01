import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './presentation/calendar/calendar';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calendar value={currentDate} onChange={setCurrentDate} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

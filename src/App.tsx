import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './presentation/calendar/calendar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* add home route that redirects to current date */}
          <Route path='/:date' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

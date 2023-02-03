import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './presentation/calendar/calendar';
import Home from './presentation/home/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:date' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

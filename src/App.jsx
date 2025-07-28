import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Courses from './pages/courses';
import Aadhya from './pages/aadhya';
import Contact from './pages/contact';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Aadhya' element={<Aadhya/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

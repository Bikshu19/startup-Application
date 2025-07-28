import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Courses from './pages/courses';
import Aadhya from './pages/aadhya';
import Contact from './pages/contact';
import About from './pages/about';
import Blog from './pages/blog'
import './App.css';
import WhatsAppButton from './components/whatsapp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Aadhya' element={<Aadhya/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/whatsapp' element={<WhatsAppButton/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

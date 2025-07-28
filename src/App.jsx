import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Courses from './pages/courses';
import Aadhya from './pages/aadhya';
import Contact from './pages/contact';
import About from './pages/about';
import Blog from './pages/blog';
import './App.css';
import WhatsAppButton from './components/whatsapp'; // ✅ This is correct

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/aadhya" element={<Aadhya />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;

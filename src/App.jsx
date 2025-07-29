import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Courses from "./pages/courses";
import Aadhya from "./pages/aadhya";
import Contact from "./pages/contact";
import About from "./pages/about";
import Blog from "./pages/blog";

import WhatsAppButton from "./components/whatsapp";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import this
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ add this just after BrowserRouter */}
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

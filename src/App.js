import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Features from "./pages/features/Features";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/features" element={<Features />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

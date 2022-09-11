import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import WorkView from "./components/work/WorkView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/features" element={<Feature/>}></Route>
        <Route path="/workview" element={<WorkView/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

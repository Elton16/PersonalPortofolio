import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

    </Routes></>
  );
}

export default App; 
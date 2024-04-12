import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from "./component/About";
import Contact from "./component/Contact"; 

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </Router>
  // <div>Home</div>

  )
}

export default App ;

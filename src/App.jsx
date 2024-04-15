import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
const App = () => {
  return (
    <div className="bg-cover bg-fixed h-screen text-white" style={{ backgroundImage: "url('src/assets/Feature-Image-Coffee.jpg')" }}>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
    </Router>
   </div>
  // <div>Home</div>
  )
}
export default App ;
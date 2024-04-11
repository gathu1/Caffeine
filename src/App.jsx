import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
   </Router>
  // <div>Home</div>

  )
}

export default App ;
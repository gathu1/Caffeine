import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './component/Contact';



function App() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Contact />} />
        </Routes>
      </Router>
    );
  }
  
  
  export default App;
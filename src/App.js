import './App.css';
import Home from "./Components/Home";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Response from './Components/Response';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './Components/ScrollTop';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/response-page' element={<div><Response /></div>} />
        <Route path='/' element={<div><Home/><Skills /><Projects /><Contact /><ScrollTop/></div>} />
        <Route path='top' element={<div><Home/><Skills /><Projects /><Contact /><ScrollTop/></div>} />
        <Route path='skills' element={<div><Skills /></div>} />
        <Route path='projects' element={<div><Projects /></div>} />
        <Route path='contact' element={<div><Contact /></div>} />
      </Routes>  
        
    </div>
    </Router>
  );
}
export default App;

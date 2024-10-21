import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Facilities from './components/facilities';
import Footer from './components/Footer';
import Notices from './components/Notices';
import GridLayout from './components/GridLayout';
import CourseCatalog from './components/CourseCatlog';
import About from './components/About'; 
import Admissions from './components/Admissions';
import Departments from './components/Departments';
import Careers from './components/Career';

import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <GridLayout />
              
              <Facilities />
              

            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        {/* <Route path="/courses" element={<CourseCatalog />} /> */}
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
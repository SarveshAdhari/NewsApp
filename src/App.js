import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Welcome from './Welcome';
import Category from './Category';
import Query from './Query';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/:cat" element={<Category />} />
        <Route exact path="/news/:q" element={<Query />} />
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;

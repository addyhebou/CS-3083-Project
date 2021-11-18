import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App bg-image'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

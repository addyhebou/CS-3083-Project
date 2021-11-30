import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Profile from './Pages/Profile.js';
import SignIn from './Pages/SignIn.js';
import Register from './Pages/Register.js';
import StaffProfile from './Pages/StaffProfile.js';
import CustomerProfile from './Pages/CustomerProfile.js';
import './App.scss';
import AirlineHome from './Pages/AirlineHome.js';

function App() {
  return (
    <Router>
      <div className='App bg-image'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/customer/profile' element={<CustomerProfile />} />
          <Route path='/staff/profile' element={<StaffProfile />} />
          <Route path='/staff/airline' element={<AirlineHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

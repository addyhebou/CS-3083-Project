import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import CustomerProfile from './CustomerProfile.js';
import StaffProfile from './StaffProfile.js';
export default function Profile() {
  return (
    <Router>
      <div className='App bg-image'>
        <Routes>
          <Route path='/customer' element={<CustomerProfile />} />
          <Route path='/staff' element={<StaffProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

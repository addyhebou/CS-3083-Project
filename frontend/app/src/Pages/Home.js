import React from 'react';
import Navbar from '../Components/Navbar.js';
import Banner from '../Components/Banner.js';
import Ticket from '../Components/Ticket.js';

export default function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Banner />
      <Ticket />
    </div>
  );
}

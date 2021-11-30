import React from 'react';
import Navbar from '../Components/Navbar.js';
import Ticket from '../Components/Ticket.js';
import ProfilePic from '../Components/ProfilePic.js';
import MoneyBlock from '../Components/MoneyBlock.js';
import BookedFlights from '../Components/BookedFlights.js';
export default function CustomerProfile() {
  return (
    <div className='CustomerProfile whiteBackground'>
      <header>
        <Navbar />
        <Ticket />
      </header>
      <body>
        <div className='profileContent'>
          <div>
            <ProfilePic />
            <h1>Monthly Spending</h1>
            <MoneyBlock />
          </div>
          <div>
            <BookedFlights />
          </div>
        </div>
      </body>
    </div>
  );
}

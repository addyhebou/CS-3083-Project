import React from 'react';
import Navbar from '../Components/Navbar.js';
import Ticket from '../Components/Ticket.js';
import ProfilePic from '../Components/ProfilePic.js';
import MoneyBlock from '../Components/MoneyBlock.js';
import BookedFlights from '../Components/BookedFlights.js';
import AddAirportAndAirlineForms from '../Components/AddAirportAndAirlineForms.js';
import { Link } from 'react-router-dom';
export default function StaffProfile() {
  let imageURL = `https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Loki_%28Thor_Ragnarok%29.jpg/revision/latest?cb=20210421185239`;
  return (
    <div className='StaffProfile whiteBackground'>
      <header>
        <Navbar />
        <Ticket />
      </header>
      <body>
        <div className='profileContent'>
          <div>
            <ProfilePic imageURL={imageURL} />
            <Link to='/staff/airline'>View airline</Link>
            <h1>Monthly Spending</h1>
            <MoneyBlock />
          </div>
          <div>
            <BookedFlights />
          </div>
        </div>
      </body>
      <footer>
        <AddAirportAndAirlineForms />
      </footer>
    </div>
  );
}

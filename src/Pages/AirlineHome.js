import React from 'react';
import AirlineStats from '../Components/AirlineStats';
import Navbar from '../Components/Navbar';
import SearchCustomer from '../Components/SearchCustomer';

export default function AirlineHome() {
  return (
    <div className='airlineHome'>
      <Navbar />
      <header>
        <h1>Asgardian Airlines</h1>
      </header>
      <body>
        <AirlineStats />
        <SearchCustomer />
      </body>
    </div>
  );
}

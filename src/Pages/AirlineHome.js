import React from 'react';
import AirlineStats from '../Components/AirlineStats';

export default function AirlineHome() {
  return (
    <div className='airlineHome'>
      <header>
        <h1>Asgardian Airlines</h1>
      </header>
      <body>
        <AirlineStats />
      </body>
    </div>
  );
}

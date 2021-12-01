import React from 'react';

export default function Flight() {
  return (
    <div className='flight'>
      <div className='frominfo'>
        <p>From</p>
        <h2>New York</h2>
        <strong>(JFK) – New York, NY</strong>
        <div>
          <p>11-25-2021</p>
          <p>5:30pm ET</p>
        </div>
      </div>
      <div className='toinfo'>
        <p>To</p>
        <h2>Los Angeles</h2>
        <strong>(BUR) - Burbank, CA</strong>
        <div>
          <p>11-25-2021</p>
          <p>9:30pm PT</p>
        </div>
      </div>
    </div>
  );
}

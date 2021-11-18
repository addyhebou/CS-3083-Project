import React from 'react';

export default function Banner() {
  return (
    <div className='banner'>
      <div>
        <h1>Hello Traveler!</h1>
        <h1>
          <span style={{ fontSize: '1.1em' }}>Where are you flying to?</span>
        </h1>
      </div>
      <div className='caption'>Phuket, Thailand</div>
    </div>
  );
}

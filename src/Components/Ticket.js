import React from 'react';
import PrimaryBtn from './Buttons/PrimaryBtn.js';

function Ticket() {
  return (
    <div className='ticket'>
      <div className='from'>
        <form>
          <p>From</p>
          <input placeholder='New York' />
          <p>(JFK) – New York, NY</p>
        </form>
      </div>
      <div className='to'>
        <form>
          <p>To</p>
          <input placeholder='Los Angeles' />
          <p>(BUR) – Burbank, CA</p>
        </form>
      </div>
      <div className='from'>
        <form>
          <p>Departure</p>
          <input placeholder='11-25-2021' />
        </form>
      </div>
      <div className='from'>
        <form>
          <p>Arrival</p>
          <input placeholder='11-30-2021' />
        </form>
      </div>
      <PrimaryBtn
        text={'Find Flights'}
        position={'absolute'}
        right={'0%'}
        top={'95%'}
      />
    </div>
  );
}

export default Ticket;

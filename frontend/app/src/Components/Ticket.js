import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from './Buttons/PrimaryBtn.js';
import ViewFlights from '../Pages/ViewFlights.js';

function Ticket() {
  const [flights, setFlights] = useState([]);
  const [clicked, setClicked] = useState(false);

  return (
    <div>
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
        {/* <Link to='/flights'> */}
        <PrimaryBtn
          text={'Find Flights'}
          position={'absolute'}
          right={'0%'}
          top={'95%'}
          onClick={() => setClicked(true)}
        />
        {console.log(clicked)}
        {/* </Link> */}
      </div>
      {clicked ? <ViewFlights /> : <div></div>}
    </div>
  );
}

export default Ticket;

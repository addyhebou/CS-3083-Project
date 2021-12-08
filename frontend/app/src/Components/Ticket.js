import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from './Buttons/PrimaryBtn.js';
import ViewFlights from '../Pages/ViewFlights.js';

function Ticket() {
  const [query, setQuery] = useState({});
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departTime, setDepartTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const lookFlights = async (e) => {
    e.preventDefault();
    let res = {};
    res['from'] = from;
    res['to'] = to;
    res['depart_time'] = departTime;
    res['arrival_time'] = arrivalTime;
    await setQuery(res);
    console.log(query);
  };

  useEffect(() => {
    setQuery(query);
  }, [query]);

  return (
    <div>
      <div className='ticket'>
        <form onSubmit={lookFlights}>
          <div className='from'>
            <p>From</p>
            <input
              placeholder='New York'
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
            <p>(JFK) – New York, NY</p>
          </div>
          <div className='to'>
            <p>To</p>
            <input
              placeholder='Los Angeles'
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
            <p>(BUR) – Burbank, CA</p>
          </div>
          <div className='from'>
            <p>Departure</p>
            <input
              placeholder='11-25-2021'
              type='date'
              id='start'
              name='trip-start'
              value={departTime}
              onChange={(e) => {
                setDepartTime(e.target.value);
              }}
            />
          </div>
          <div className='from'>
            <p>Arrival</p>
            <input
              placeholder='11-30-2021'
              type='date'
              id='start'
              name='trip-start'
              value={arrivalTime}
              onChange={(e) => {
                setArrivalTime(e.target.value);
              }}
            />
          </div>
          <button type='submit' style={{ width: '30px', height: '70px' }}>
            <Link to='/flights' state={query}>
              <PrimaryBtn
                text={'Find Flights'}
                position={'absolute'}
                right={'0%'}
                top={'95%'}
              />
            </Link>
          </button>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
}

export default Ticket;

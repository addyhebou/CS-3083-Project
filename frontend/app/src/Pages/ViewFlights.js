import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ViewFlights(props) {
  const location = useLocation();
  const query = location.state;
  const [flights, setflights] = useState([]);

  const getFlights = async () => {
    try {
      const response = await fetch('http://localhost:4000/flight');
      const json = await response.json();
      setflights(json);
      console.log(json);
      console.log(flights);
      console.log(typeof flights);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className='Flights'>
      <h1>View Flights</h1>
      {/* {Object.keys(flights).map((flight) => {
        return (
          <div>
            <strong>{flight.airline}</strong>
            <strong>{flight.departure_date}</strong>
            <strong>{flight.departure_time}</strong>
            <strong>{flight.arrival_date}</strong>
            <strong>{flight.arrival_time}</strong>
            <strong>{flight.price}</strong>
          </div>
        );
      })} */}
    </div>
  );
}

export default ViewFlights;

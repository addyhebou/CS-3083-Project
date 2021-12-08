import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ViewFlights(props) {
  const location = useLocation();
  const query = location.state;
  const [flights, setflights] = useState([]);

  const getFlights = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/flights/from/${query['from']}/to/${query['to']}/depart/${query['depart_time']}/arrival/${query['arrival_time']}`
      );
      const json = await response.json();
      setflights(json);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFlights();
    console.log(query);
  }, []);

  return (
    <div className='Flights'>
      <h1>View Flights</h1>
      {flights.length > 0 ? (
        flights.map((flight) => {
          return (
            <ul>
              <li>Airline: {flight.airline}</li>
              <li>Departure date: {flight.departure_date}</li>
              <li>Departure time: {flight.departure_time}</li>
              <li>Arival date: {flight.arrival_date}</li>
              <li>Arrival_Time: {flight.arrival_time}</li>
              <li>Price: {flight.price}</li>
            </ul>
          );
        })
      ) : (
        <div>
          <strong>No flights match your query...</strong>
          <Link to='/'>
            <p>Search again</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ViewFlights;

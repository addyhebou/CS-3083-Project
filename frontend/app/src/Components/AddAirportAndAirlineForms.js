import React from 'react';
import AddAirlineForm from './AddAirlineForm';
import AddAirportForm from './AddAirportForm';

export default function AddAirportAndAirlineForms() {
  return (
    <div className='addAirportAndAirlineForms'>
      <AddAirlineForm />
      <AddAirportForm />
    </div>
  );
}

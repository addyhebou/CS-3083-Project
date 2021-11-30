import React from 'react';

export default function AddAirportForm() {
  return (
    <div className='addAirportForm'>
      <h1>Add Airport</h1>
      <form>
        <input
          placeholder='Name of Airport'
          className='input'
          type='text'
          id='fname'
          name='fname'
        />
        <input
          placeholder='Name of Airline'
          className='input'
          type='text'
          id='lname'
          name='lname'
        />
        <input
          placeholder='City Name'
          className='input'
          type='text'
          id='lname'
          name='lname'
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

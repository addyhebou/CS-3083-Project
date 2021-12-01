import React from 'react';

export default function AddAirlineForm() {
  return (
    <div className='addAirlineForm'>
      <h1>Add Airline</h1>
      <form>
        <input
          placeholder='Name of airline'
          className='input'
          type='text'
          id='fname'
          name='fname'
        />
        <input
          placeholder='Number of airplanes'
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

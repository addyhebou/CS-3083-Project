import React from 'react';

export default function DestinationBlock() {
  let destinations = ['Midgard', 'Asgard'];
  return (
    <div className='block'>
      <p>Top Destinations</p>
      {destinations.map((location) => {
        return <strong>{location}</strong>;
      })}
    </div>
  );
}

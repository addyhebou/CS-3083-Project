import React from 'react';

export default function CustomerBlock() {
  let customer = 'Bruce Banner';
  return (
    <div className='block'>
      <p>Top Customer</p>
      <strong>{customer}</strong>
    </div>
  );
}

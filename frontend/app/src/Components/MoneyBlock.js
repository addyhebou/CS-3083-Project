import React from 'react';

export default function MoneyBlock() {
  let amount = '678';
  return (
    <div className='block'>
      <strong>{amount}</strong>
      <p>Dollars</p>
    </div>
  );
}

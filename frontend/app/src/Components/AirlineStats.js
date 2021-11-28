import React from 'react';
import MoneyBlock from './MoneyBlock';
import DestinationBlock from './DestinationBlock';
import CustomerBlock from './CustomerBlock';

export default function AirlineStats() {
  return (
    <div>
      <MoneyBlock />
      <DestinationBlock />
      <CustomerBlock />
    </div>
  );
}

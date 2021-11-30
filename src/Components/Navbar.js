import React from 'react';
import PrimaryBtn from './Buttons/PrimaryBtn.js';
import SecondaryBtn from './Buttons/SecondaryBtn.js';

export default function Navbar() {
  return (
    <div className='navbar'>
      <strong className='homeLink'>Databases</strong>
      <div class='navButtons'>
        <SecondaryBtn text={'Register'} />
        <PrimaryBtn text={'Sign In'} />
      </div>
    </div>
  );
}

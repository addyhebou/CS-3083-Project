import React from 'react';
import PrimaryBtn from './Buttons/PrimaryBtn.js';
import SecondaryBtn from './Buttons/SecondaryBtn.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <strong className='homeLink'>Databases</strong>
      </Link>
      <Link to='/customer/profile'>
        <p>Customer profile</p>
      </Link>
      <Link to='/staff/profile'>
        <p>Staff profile</p>
      </Link>
      <div class='navButtons'>
        <Link to='/register'>
          <SecondaryBtn text={'Register'} />
        </Link>
        <Link to='/signin'>
          <PrimaryBtn text={'Sign In'} />
        </Link>
      </div>
    </div>
  );
}

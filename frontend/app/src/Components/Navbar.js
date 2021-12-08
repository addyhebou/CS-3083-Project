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
      {localStorage.getItem('type') === 'customer' ? (
        <Link to='/customer/profile'>
          <p>Customer profile</p>
        </Link>
      ) : localStorage.getItem('type') === 'staff' ? (
        <Link to='/staff/profile'>
          <p>Staff profile</p>
        </Link>
      ) : (
        <div></div>
      )}
      {!localStorage.getItem('name') ? (
        <div class='navButtons'>
          <Link to='/register'>
            <SecondaryBtn text={'Register'} />
          </Link>
          <Link to='/signin'>
            <PrimaryBtn text={'Sign In'} />
          </Link>
        </div>
      ) : (
        <Link
          to='/'
          onClick={() => {
            alert(` ${localStorage.getItem('name')} is signed out`);
            localStorage.clear();
          }}
        >
          <PrimaryBtn text={'Sign Out'} />
        </Link>
      )}
    </div>
  );
}

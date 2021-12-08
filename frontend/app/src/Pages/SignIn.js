import React from 'react';
import { useState } from 'react';

export default function SignIn() {
  const [customer, setCustomer] = useState({});
  const [staff, setStaff] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isStaff, setIsStaff] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);

  const signIn = async (e) => {
    e.preventDefault();
    const url = isCustomer ? `customers` : `staff`;
    try {
      const response = await fetch(
        `http://localhost:4000/${url}/email/${email}/password/${password}`
      );
      const json = await response.json();
      console.log(url);
      console.log(json);
      isCustomer ? setCustomer(json) : setStaff(json);
      isCustomer ? console.log(customer) : console.log(staff);
      const obj = isCustomer ? customer : staff;
      console.log(obj);
      localStorage.setItem('name', obj[0]['name']);
      localStorage.setItem('password', obj[0]['password']);
      localStorage.setItem('email', obj[0]['email']);
      localStorage.setItem('phone', obj[0]['phone']);
      localStorage.setItem('birth_date', obj[0]['birth_date']);
      localStorage.setItem('imageURL', obj[0]['image_URL']);
      localStorage.setItem('type', isCustomer ? 'customer' : 'staff');
      window.location.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='signIn'>
      <div className='signInForm'>
        <h1>Are you a customer or an airline staff member?</h1>
        <form onSubmit={signIn}>
          <div
            onClick={() => {
              setIsCustomer(true);
              setIsStaff(false);
            }}
          >
            <input
              type='radio'
              id='html'
              name='fav_language'
              checked={isCustomer == true && isStaff == false}
              value={isCustomer}
            />
            <label for='html'>Customer</label>
          </div>
          <div
            onClick={() => {
              setIsCustomer(false);
              setIsStaff(true);
            }}
          >
            <input
              type='radio'
              id='css'
              name='fav_language'
              value='Airline'
              checked={isStaff == true && isCustomer == false}
              value={isStaff}
            />
            <label for='css'>Airline Staff Member</label>
          </div>
          <h1>Sign into your account</h1>
          <div className='greenBar'></div>
          <div>
            <label for='fname'>Email:</label>
            <input
              placeholder='example@example.com'
              className='input'
              type='text'
              id='fname'
              name='fname'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label for='lname'>Password:</label>
            <input
              placeholder='Password'
              className='input'
              type='text'
              id='lname'
              name='lname'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

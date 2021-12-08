import React from 'react';
import { useState } from 'react';
const signInFunc = require('../signInFunction');

export default function SignIn() {
  const [customer, setCustomer] = useState({});
  const [staff, setStaff] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [isStaff, setIsStaff] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);
  console.log('Selected: ', isCustomer ? 'customer' : 'staff');

  const changeUser = (e) => {
    e.preventDefault();
    let result = {};
    result['name'] = name;
    result['phone'] = phone;
    result['email'] = email;
    result['password'] = daijahHash(password);
    result['unhash'] = password;
    result['birth_date'] = birth_date;
    isCustomer ? setCustomer(result) : setStaff(result);
    onSubmitForm();
  };

  const signInFunc = async () => {
    console.log('we in sign in');
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
      localStorage.setItem('name', obj['name']);
      localStorage.setItem('password', obj['password']);
      localStorage.setItem('email', obj['email']);
      localStorage.setItem('phone', obj['phone']);
      localStorage.setItem('birth_date', obj['birth_date']);
      localStorage.setItem('imageURL', obj['image_URL']);
      localStorage.setItem('type', isCustomer ? 'customer' : 'staff');
      window.location.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const daijahHash = (password) => {
    var md5 = require('md5');
    var hash = md5(password);
    console.log(`Old password: ${password}; New password: ${hash}`);
    return hash;
  };

  const onSubmitForm = async () => {
    try {
      const body = isStaff ? staff : customer;
      console.log(body);
      let url = isCustomer
        ? 'http://localhost:4000/customers'
        : 'http://localhost:4000/staff';
      const response = await fetch(url, {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
      console.log('bout to enter sign in func');
      signInFunc();
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className='signIn'>
      <div className='signInForm'>
        <h1>Are you a customer or an airline staff member?</h1>
        <form onSubmit={changeUser}>
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
          <h1>Register</h1>
          <div className='greenBar'></div>
          <div>
            <label for='fname'>Name:</label>
            <input
              placeholder='Your first and last name'
              className='input'
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label for='fname'>Email:</label>
            <input
              placeholder='example@example.com'
              className='input'
              type='text'
              id='email'
              name='email'
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
              id='password'
              name='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <label for='lname'>Phone Number:</label>
            <input
              placeholder='Phone number'
              className='input'
              type='text'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <label for='lname'>Birth Date (optional):</label>
            <input
              placeholder='Enter birth date in MM-DD-YY format'
              className='input'
              type='text'
              id='birth_date'
              name='birth_date'
              value={birth_date}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

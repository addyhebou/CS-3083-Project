import React from 'react';
import { useState } from 'react';

export default function SignIn() {
  const [customer, setCustomer] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth_date, setBirthDate] = useState('');

  const changeCustomer = (e) => {
    e.preventDefault();
    let result = {};
    result['name'] = name;
    result['phone'] = phone;
    result['email'] = email;
    result['password'] = password;
    result['birth_date'] = birth_date;
    setCustomer(result);
    onSubmitForm();
  };

  const onSubmitForm = async () => {
    try {
      const body = customer;
      console.log(body);
      const response = await fetch('http://localhost:4000/customers', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className='signIn'>
      <div className='signInForm'>
        <h1>Are you a customer or an airline staff member?</h1>
        <form onSubmit={changeCustomer}>
          <div>
            <input type='radio' id='html' name='fav_language' value='HTML' />
            <label for='html'>Customer</label>
          </div>
          <div>
            <input type='radio' id='css' name='fav_language' value='CSS' />
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

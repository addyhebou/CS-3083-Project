import React from 'react';

export default function SignIn() {
  return (
    <div className='signIn'>
      <div className='signInForm'>
        <h1>Are you a customer or an airline staff member?</h1>
        <form>
          <div>
            <input type='radio' id='html' name='fav_language' value='HTML' />
            <label for='html'>Customer</label>
          </div>
          <div>
            <input type='radio' id='css' name='fav_language' value='CSS' />
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
            />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

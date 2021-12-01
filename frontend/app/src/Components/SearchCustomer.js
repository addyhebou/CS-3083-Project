import React from 'react';

export default function SearchCustomer() {
  let ticket1 = {
    from: 'LAX',
    to: 'NYC',
    departure: '12:34 09-27-04',
    arrival: '14:53 09-27-04',
  };
  let ticket2 = {
    from: 'NYC',
    to: 'LAX',
    departure: '12:34 09-27-04',
    arrival: '14:53 09-27-04',
  };
  let customer = {
    name: 'Thor',
    email: 'mjolnir@asgard.com',
    tickets: [ticket1, ticket2],
  };
  return (
    <div className='searchCustomer'>
      <form>
        <input
          type='text'
          placeholder='Search for customer (email address)'
          id='Search Customer'
        />
        <input type='submit' value='Submit' />
      </form>
      <h2>{customer.name}</h2>
      <h2>{customer.email}</h2>
      <div className='customerTickets'>
        {customer.tickets.map((ticket) => {
          return (
            <div className='customerTicket'>
              <p>From: {ticket.from}</p>
              <p>To: {ticket.to}</p>
              <p>Departure: {ticket.departure}</p>
              <p>Arrival: {ticket.arrival}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

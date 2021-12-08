//Heroku Link
//https://cs-3083.herokuapp.com/

const express = require('express'); // init express app
const app = express(); // calls the app
//Setting up port dynaically with Heroku
const port = process.env.PORT || 4000; // defines what port to use (most likely gonna be 4000)
const cors = require('cors'); // prevents CORS error
const pool = require('./db'); // stores the db credentials

app.use(cors());
app.use(express.json());

console.log('Running index.js');
// Routes

// CREATE A CUSTOMER
app.post('/customers', async (req, res) => {
  try {
    const user = req.body; // body input must be in SQL form
    console.log(user);
    const newUser = await pool.query(
      `INSERT INTO public."customer" VALUES ($1, $2, $3, $4, $5)`,
      [user.name, user.email, user.password, user.phone, user.birth_date]
    );
    const newPasswordEntry = await pool.query(
      `INSERT INTO public."passwords" ("unhash", "hash") VALUES ($1, $2) RETURNING *;`,
      [user.unhash, user.password]
    );

    res.json(newUser);
    res.json(newPasswordEntry);
  } catch (error) {
    console.log(error.message);
  }
});

app.post('/staff', async (req, res) => {
  try {
    const user = req.body; // body input must be in SQL form
    const newUser = await pool.query(
      'INSERT INTO public."staff" VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user.name, user.email, user.password, user.phone, user.birth_date]
    );
    const newPasswordEntry = await pool.query(
      `INSERT INTO public."passwords" ("unhash", "hash") VALUES ($1, $2) RETURNING *;`,
      [user.unhash, user.password]
    );
    res.json(newPasswordEntry);

    res.json(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

// CREATE A AIRPLANE
app.post('/airplanes', async (req, res) => {
  try {
    const airplane = req.body;
    const airplaneQuery = await pool.query(
      'INSERT INTO public."airplane" VALUES ($1, $2, $3) RETURNING *',
      [airplane.plane_ID, airplane.airline, airplane.num_of_seats]
    );

    res.json(airplaneQuery);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL CUSTOMERS
app.get('/customers', async (req, res) => {
  try {
    const users = await pool.query('SELECT * from public.customer');
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL STAFF
app.get('/staff', async (req, res) => {
  try {
    const staff = await pool.query('SELECT * from public.staff');
    res.json(staff.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL FLIGHTS
app.get('/flights', async (req, res) => {
  try {
    const flight = await pool.query('SELECT * from public.flight');
    res.json(flight.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL AIRPLANES
app.get('/airplanes', async (req, res) => {
  try {
    const airplane = await pool.query('SELECT * from public.airplane');
    res.json(airplane.rows);
  } catch (error) {
    console.log(error.message);
  }
});

const daijahHash = (password) => {
  var md5 = require('md5');
  var hash = md5(password);
  console.log(`Old password: ${password}; New password: ${hash}`);
  return hash;
};

// GET A SPECIFIC CUSTOMER
app.get('/customers/email/:email/password/:password', async (req, res) => {
  try {
    const params = req.params;
    const email = params['email'];
    const password = params['password'];
    const users = await pool.query(
      `SELECT PUBLIC.CUSTOMER.*
      FROM PUBLIC.CUSTOMER,
        PUBLIC.PASSWORDS
      WHERE PUBLIC.PASSWORDS.HASH = PUBLIC.CUSTOMER.PASSWORD
        AND PUBLIC.PASSWORDS.UNHASH = $2
        AND PUBLIC.CUSTOMER.EMAIL = $1;`,
      [email, password]
    );
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET A SPECIFIC STAFF
app.get('/staff/email/:email/password/:password', async (req, res) => {
  try {
    const params = req.params;
    const email = params['email'];
    const password = params['password'];
    const users = await pool.query(
      `SELECT PUBLIC.STAFF.*
      FROM PUBLIC.STAFF,
        PUBLIC.PASSWORDS
      WHERE PUBLIC.PASSWORDS.HASH = PUBLIC.STAFF.PASSWORD
        AND PUBLIC.PASSWORDS.UNHASH = $2
        AND PUBLIC.STAFF.EMAIL = $1;`,
      [email, password]
    );
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET AIRLINE-SPECIFIC AIRPLANES
app.get('/airplanes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const airplanes = await pool.query(
      'SELECT * from public.airplane WHERE airline = $1',
      [id]
    );
    res.json(airplanes.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET AIRLINE-SPECIFIC FLIGHTS
app.get('/flights/:airline', async (req, res) => {
  try {
    const { airline } = req.params;
    console.log(airline);
    const flights = await pool.query(
      'SELECT * from public.flight WHERE airline = $1',
      [airline]
    );
    res.json(flights.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET SEARCHED FLIGHTS
app.get(
  '/flights/from/:from/to/:to/depart/:depart/arrival/:arrival',
  async (req, res) => {
    try {
      const id = req.params;
      const from = id['from'] || '';
      const to = id['to'] || '';
      const depart = id['depart'] || '';
      const arrival = id['arrival'] || '';
      console.log(id);
      console.log(from);
      console.log(to);
      console.log(depart);
      console.log(arrival);
      const flights = await pool.query(
        `
        SELECT *
        FROM PUBLIC.FLIGHT
        WHERE "from" = $1
          AND "to" = $2
          AND "departure_date" >= $3
          AND "arrival_date" <= $4;
      `,
        [from, to, depart, arrival]
      );
      res.json(flights.rows);
      console.log(res.json(flights.rows));
    } catch (error) {
      console.log('hello');
      console.log(error.message);
    }
  }
);

// UPDATE A CUSTOMER's NAME
app.put('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    // Make sure to edit the SQL
    const users = await pool.query(
      'UPDATE public.customer SET name = $1 WHERE name = $2',
      [name, id]
    );
    res.json('User was updated!');
  } catch (error) {
    console.log(error.message);
  }
});

// DELETE A CUSTOMER BY NAME (deletes from customer and customer_address table)
app.delete('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await pool.query(
      'DELETE from public.customer WHERE name = $1',
      [id]
    );
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

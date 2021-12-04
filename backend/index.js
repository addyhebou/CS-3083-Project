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

// create a user
app.post('/customers', async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const newUser = await pool.query(
      'INSERT INTO public."customer" VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user.name, user.email, user.password, user.phone, user.birth_date]
    );

    res.json(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

// get all users
app.get('/customers', async (req, res) => {
  try {
    const users = await pool.query('SELECT * from public.customer');
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Route to get all flights
app.get('/flight', async (req, res) => {
  try {
    const flight = await pool.query('SELECT * from public.flight');
    res.json(flight.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a user
app.get('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await pool.query(
      'SELECT * from public.customer WHERE name = $1',
      [id]
    );
    res.json(users.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// update a user

app.put('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const users = await pool.query(
      'UPDATE public.customer SET name = $1 WHERE name = $2',
      [name, id]
    );
    res.json('User was updated!');
  } catch (error) {
    console.log(error.message);
  }
});

// delete a user
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// const indexRoute = require('./routes/index.js');

// app.use('/', indexRoute);

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// // Handle GET requests to /api route
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from server!' });
// });

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });

/*

PERN Stack
MEAN Stack
MERN Stack
PEVN 

<Routes>
    <Route></Route>
    <></>

</Routes>


P: PostGreSql
E

*/

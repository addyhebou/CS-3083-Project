const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'qeqcuvnhnwjrdd',
  password: '2510fb215d00cbdbf62c1f3d14f46f1d650e740f0b948993b8d19c8ee7a08457',
  host: 'ec2-3-228-86-183.compute-1.amazonaws.com',
  port: 5432,
  database: 'dbuicumbf66i2h',
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// pool.connect();

// pool.query(`Select * from users`, (err, res) => {
//   if (!err) console.log(res.rows);
//   else console.log(err.message);
//   pool.end;
// });

// pool
//   .connect()
//   .then(() => console.log('Connected successfully - woohoo!'))
//   .then(() => pool.query('SELECT * FROM public."customer"'))
//   .catch((e) => console.log(e))
//   .then((results) => console.table(results.rows))
//   .catch((err) => console.log(err))
//   .finally(() => pool.end());

module.exports = pool;

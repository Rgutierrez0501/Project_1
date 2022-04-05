// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('./dbconnection');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
// const ads = [
//   {title: 'Hello, world (again)!'}
// ];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  //res.send(ads);
});

//http://localhost:3001/userByName/email
app.get('/userByName/:email',(req,res)=>{

  const user_email =req.params.email;
  poolconn.query('SELECT * FROM employees WHERE email=$1',[user_email],(error,results)=>{
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
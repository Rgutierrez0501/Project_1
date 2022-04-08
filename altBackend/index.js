// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('./dbconnection');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});


//http://localhost:3001/users
app.get('/users',(req,res)=>{

  
  poolconn.query('SELECT id,first_name, last_name FROM employees',(error,results)=>{
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});



const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-oyuwqj0t.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://p1-api',
issuer: 'https://dev-oyuwqj0t.us.auth0.com/',
algorithms: ['RS256']
});

app.use(jwtCheck);


//http://localhost:3001/emails
app.get('/emails',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  
  poolconn.query('SELECT id,email FROM employees',(error,results)=>{
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});

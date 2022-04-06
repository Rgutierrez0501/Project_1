// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('./dbconnection');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
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

//http://localhost:3001/users
app.get('/users',(req,res)=>{

  
  poolconn.query('SELECT first_name, last_name FROM employees',(error,results)=>{
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});


//verfiy Login Details
//http://localhost:3001/login
app.get('/login/:uName/:passcode',(req,res)=>{
  
  //converting string type id to integer or number type
  //Front end you have given uName and passcode
  //console.log(req.params);
  //console.log('Type of  uName----'+typeof(req.params.uName)+'----'+req.params.uName);

  const user_name =req.params.uName;
  const pass_word =req.params.passcode;

  //Below  query is to retrieve all columns from DB for usesr_name and result will be in resutls.rows
  poolconn.query('SELECT * FROM employees WHERE email=$1',[user_name],(error,results)=>{
      if(error){
          throw error;
      }
      //logic to validate data from request param with data from DB
      
     // console.log(results.rows[0].password)
      if((results.rows[0].password == pass_word ) ){
          res.status(200).json("Login Successful");
      }else{
          res.status(401).json("Username or Password doesn't match");
      }

      
     // res.status(200).json(results.rows);
     if(results.rowCount>0){
         //username found
      res.status(200).json(results.rows);
     }else{
      res.status(200).json(null);
     }


  })
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-oyuwqj0t.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://p1-api',
  issuer: `https://dev-oyuwqj0t.us.auth0.com/`,
  algorithms: ['RS256']
});

app.use(checkJwt);

//http://localhost:3001/emails
app.get('/emails',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  
  poolconn.query('SELECT email FROM employees',(error,results)=>{
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});

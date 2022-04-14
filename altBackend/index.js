// importing the dependencies
const express = require('express');//import {router} from 'express'//dependcies for framework
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('./dbconnection');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// defining the Express app
const app = express();//is app representation

// adding Helmet to enhance your API's security
app.use(helmet());
//same as app.use('/',router);

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
//same as app.use('/',router);
// enabling CORS for all requests
app.use(cors());
//same as app.use('/',router);
// adding morgan to log HTTP requests
app.use(morgan('combined'));
//same as app.use('/',router);


// starting the server    
app.listen(3001, () => {
  console.log('listening on port 3001');
});

/**SAME AS in VIDEO
 * const serer =http.createServer(app);
 * server.listen(port);
 * */


//http://localhost:3001/users
app.get('/users',(req,res)=>{ //router.get('/",index")

  
  poolconn.query('SELECT id,first_name, last_name FROM employees',(error,results)=>{//default.js page content data from db
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});


//sets up API with Auth0 information to create protected links
const jwtCheck = jwt({//
  secret: jwks.expressJwtSecret({
      cache: true, //caching info which makes RESTful api
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-oyuwqj0t.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://p1-api',
issuer: 'https://dev-oyuwqj0t.us.auth0.com/',
algorithms: ['RS256']
});

//All HTTP methods require authorization token beyond this point
app.use(jwtCheck);
//app.use("/",router);


//http://localhost:3001/emails
app.get('/emails',(req,res)=>{   //router.get('/',index);
  res.set('Access-Control-Allow-Origin', '*');//app.set('port',port)
  //
  
  poolconn.query('SELECT id,email FROM employees',(error,results)=>{//callback from DB request
      if(error){
          throw error;
      }
      res.status(200).json(results.rows);
  })
});

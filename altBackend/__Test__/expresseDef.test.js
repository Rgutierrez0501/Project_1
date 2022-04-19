import React from 'react';
import {supertet} from 'altBackend/__Test__/handler.t.js'
import { request } from 'express';


// defining the Express app
const app = express();//is app representation

// adding Helmet to enhance your API's security
app.use(helmet());

describe ('checking route helmet method', () =>{
    test ('responde to /', async () => {
        const res = await request(app).get
    })
});

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
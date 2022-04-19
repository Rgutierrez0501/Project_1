//Importing dependencies in video it was hardcoded functions that were mock database information

const Users= require('./user');
const axios= require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('../dbconnection');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { query } = require('express');
  
   
jest.mock('axios');

    test('should fetch users', () => {
        const users = [{id:'1', first_name: 'Bob',last_name:'Guy'}];
        const resp = {data: users};
        axios.get.mockResolvedValue(resp);
        return Users().then(data => expect(data).toEqual(users));
      });


    test('respond to /emails', ()=> {
        const email =[{email:'user1@yahoo.com', password: 'abc123!'}];
        const resp ={data: email};
        axios.get.mockResolvedValue(resp);
        return email();
    });

            
    //         poolconn.query('SELECT id,email FROM employees',(error,results)=>{
    //             if(error){
    //                 throw error;
    //             }
    //             res.status(200).json(results.rows);
    //         })
    //       });
    //}
    // app.get('/emails',(req,res, ()=> {
    //     res.set('Access-Control-Allow-Origin', '*');

//     poolconn.query(res.status(200).json(results.rows)).toEqual('SELECT id,email FROM employees',(results));
// });
//Importing dependencies in video it was hardcoded functions that were mock database information

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const poolconn = require('../dbconnection');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const { query } = require('express');

describe('Test Handlers', () => {
    
    test('respond to /users', ()=>{
        app.get('/users',(req,res)=>{ 

            poolconn.query('SELECT id,first_name, last_name FROM employees',(error,results)=>{//default.js page content data from db
                if(error){
                    throw error;
                }
                res.status(200).json(results.rows);
            })
          });
    }
    app.get('/users',(req,res))
    expect(poolconn.query(res.status(200).json(results.rows)).toEqual('SELECT id,first_name, last_name FROM employees',(results)));

)});
    test('respond to /emails', ()=> {
        app.get('/emails',(req,res)=>{   //router.get('/',index);
            
            poolconn.query('SELECT id,email FROM employees',(error,results)=>{//default.js page content data from db
                if(error){
                    throw error;
                }
                res.status(200).json(results.rows);
            })
          });
    }
    app.get('/emails',(req,res)=>{
        res.set('Access-Control-Allow-Origin', '*');

    poolconn.query(res.status(200).json(results.rows)).toEqual('SELECT id,email FROM employees',(results));
});
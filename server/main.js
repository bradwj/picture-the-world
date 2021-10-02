const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// register endpoints
const endpoints = require('./endpoints.js');

const client = new MongoClient(process.env.DATABASE_URI);

endpoints(app, client);
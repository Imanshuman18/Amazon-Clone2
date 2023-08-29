const functions = require("firebase-functions");
const express = require('express')
const cors = require("cors")
const stripe = require("stripe")('sk_test_51MrKPWSBNqN8QTevwPi0Hf6qZtL2kQwd5GXBPz6JiIS1rUCVydI9u7RgPLlCiaiOorx9CvOZ2TEcS3wj3Y19UFsW00H3XnH7W9')


//API

//APP CONFIG

//MIDDLEWARE
app.use(cors({origin:true}))
app.use(express.json());

//API ROUTES 
app.get('/',(request,response)=>response.status(200).send('Hello World'))
//LISTNER
exports.api=functions.https.onRequest(app)
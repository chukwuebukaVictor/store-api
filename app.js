require('dotenv').config();
//async errors

const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware.not-found');
const errorMiddleware  = require('./middleware/error-handler')


const port = 3000;
app.listen(port,()=>{
console.log(`Server is listening on port ${port}`);
})
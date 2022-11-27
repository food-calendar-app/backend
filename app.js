require('dotenv').config()
require('express-async-errors');

const express = require('express')
const authenticateUser = require('./middleware/authentication')
const app = express()

//db
const connectDB = require('./db/connect');

//routers
const authRouter = require('./routes/auth')
const infoRouter = require('./routes/information')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())

// routes

app.use('/api/auth',authRouter)
app.use('/api/info',authenticateUser,infoRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()

// accounts

// info
  //  name ,date/time , ingredients, recipe, 
// in frontend add nutreient info

// https://rapidapi.com/edamam/api/recipe-search-and-diet
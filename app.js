require('dotenv').config()
require('express-async-errors');

const express = require('express')
const cors = require('cors')
const authenticateUser = require('./middleware/authentication')
const app = express()

//db
const connectDB = require('./db/connect');

//routers
const authRouter = require('./routes/auth')
const infoRouter = require('./routes/information')
const recipeRounter = require('./routes/recipe')
const favoriteRouter = require('./routes/favorite')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())
app.use(cors())

// routes
app.use('/api/api',recipeRounter)
app.use('/api/auth',authRouter)
app.use('/api/info',authenticateUser,infoRouter)
app.use('/api/favorite',authenticateUser,favoriteRouter)

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


// search recipes and info
  //https://rapidapi.com/spoonacular/api/recipe-food-nutrition/


// nutreitnal values
// https://rapidapi.com/apininjas/api/nutrition-by-api-ninjas/ - use

// https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/ - use

// railway.app
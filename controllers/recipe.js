const {StatusCodes} = require('http-status-codes')
const request = require('request');

const getRecipe = async (req,res) => {
    let query = req.query.name
    request.get({
        url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
        headers: {
            'X-Api-Key': process.env.API_KEY
        },
    }, function(error, response, body) {
        if (error || response.statusCode != 200){
            res.status(StatusCodes.BAD_REQUEST).json({error})
        }else{
            res.status(StatusCodes.OK).json(JSON.parse(body))
        }
    });
}

const getNutrition = async (req,res) => {
    let query = req.query.name
    request.get({
      url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
      headers: {
        'X-Api-Key': process.env.API_KEY
      },
    }, function(error, response, body) {
        if (error || response.statusCode != 200){
            res.status(StatusCodes.BAD_REQUEST).json({error})
        }else{
            res.status(StatusCodes.OK).json(JSON.parse(body))
        }
    });
}

module.exports = {getRecipe , getNutrition}


//https://api-ninjas.com/api/recipe
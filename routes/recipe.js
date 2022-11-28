const express = require('express')
const router = express.Router()
const {getRecipe, getNutrition} = require('../controllers/recipe')


router.route('/recipe').get(getRecipe)
router.route('/nutrition').get(getNutrition)

module.exports = router

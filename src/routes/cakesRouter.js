import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create } from '../schemas/cakesSchemas.js'
import { createCake } from '../controllers/cakesController.js'
import { checkName } from '../middlewares/cakesMiddleware.js'

const route = Router()

route.post('/cakes', schemaValidator(create), checkName, createCake)

export default route

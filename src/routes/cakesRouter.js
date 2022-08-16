import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create } from '../schemas/cakesSchemas.js'
import { createCake } from '../controllers/cakesController.js'

const route = Router()

route.post('/cakes', schemaValidator(create), createCake)

export default route

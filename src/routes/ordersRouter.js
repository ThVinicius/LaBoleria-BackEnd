import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create } from '../schemas/ordersSchemas.js'
import { createOrder } from '../controllers/ordersController.js'

const route = Router()

route.post('/order', schemaValidator(create), createOrder)

export default route

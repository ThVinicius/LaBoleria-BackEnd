import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create } from '../schemas/ordersSchemas.js'
import { createOrder, getOrders } from '../controllers/ordersController.js'

const route = Router()

route.post('/order', schemaValidator(create), createOrder)
route.get('/orders', getOrders)

export default route

import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create, paramsId } from '../schemas/ordersSchemas.js'
import { createOrder, getOrders } from '../controllers/ordersController.js'

const route = Router()

route.post('/order', schemaValidator(create), createOrder)
route.get('/orders', getOrders)
route.get('/orders/:id', schemaValidator(paramsId, 'params'), getOrders)

export default route

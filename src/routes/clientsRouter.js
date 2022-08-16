import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { create } from '../schemas/clientsSchema.js'
import { createClient } from '../controllers/clientsController.js'

const route = Router()

route.post('/clients', schemaValidator(create), createClient)

export default route

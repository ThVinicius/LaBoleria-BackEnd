import { Router } from 'express'
import schemaValidator from '../middlewares/schemaValidator.js'
import { createSchema } from '../schemas/clientsSchema.js'
import { createClient } from '../controllers/clientsController.js'

const route = Router()

route.post('/clients', schemaValidator(createSchema), createClient)

export default route

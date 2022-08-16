import { Router } from 'express'
import clientsRouter from '../routes/clientsRouter.js'

const router = Router()

router.use(clientsRouter)

export default router

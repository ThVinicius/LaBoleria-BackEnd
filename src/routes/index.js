import { Router } from 'express'
import clientsRouter from '../routes/clientsRouter.js'
import cakesRouter from '../routes/cakesRouter.js'

const router = Router()

router.use(clientsRouter)
router.use(cakesRouter)

export default router

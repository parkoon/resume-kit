import express from 'express'
import systemController from './controller'

const router = express.Router()

router.get('/', systemController.getSystem)
router.put('/enable', systemController.updateEnable)
router.put('/sort', systemController.updateSort)

export default router

import express from 'express'
import systemController from './controller'

const router = express.Router()

router.get('/', systemController.getSystem)
router.get('/db', systemController.getDB)
router.post('/deploy', systemController.deploy)
router.put('/enable', systemController.updateEnable)
router.put('/sort', systemController.updateSort)

export default router

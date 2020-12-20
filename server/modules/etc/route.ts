import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getEtc)
router.post('/', profileController.saveEtc)

export default router

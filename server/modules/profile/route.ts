import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getProfile)
router.post('/', profileController.saveProfile)

export default router

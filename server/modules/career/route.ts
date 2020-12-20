import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getCareer)
router.post('/', profileController.saveCareer)

export default router

import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getEducation)
router.post('/', profileController.saveEducation)

export default router

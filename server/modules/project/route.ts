import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getProject)
router.post('/', profileController.saveProject)

export default router

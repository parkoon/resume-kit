import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getSkill)
router.post('/', profileController.saveSkill)

export default router

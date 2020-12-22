import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getAllEducations)
router.post('/', profileController.addEducation)
router.delete('/:id', profileController.deleteEducation)
router.put('/:id', profileController.updateEducation)

export default router

import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getProject)
router.put('/', profileController.updateProject)
router.put('/:id', profileController.updateProjectById)
router.delete('/:id', profileController.deleteProject)
router.post('/', profileController.addProject)

export default router

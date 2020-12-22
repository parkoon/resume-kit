import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getAllCareers)
router.post('/', profileController.addCareer)
router.delete('/:id', profileController.deleteCareer)
router.put('/:id', profileController.updateCareer)

export default router

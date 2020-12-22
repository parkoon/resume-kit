import express from 'express'
import profileController from './controller'

const router = express.Router()

router.get('/', profileController.getAllEtcs)
router.post('/', profileController.addEtc)
router.delete('/:id', profileController.deleteEtc)
router.put('/:id', profileController.updateEtc)

export default router

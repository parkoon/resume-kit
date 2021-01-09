import express from 'express'
import skillController from './controller'

const router = express.Router()

router.get('/', skillController.getSkill)
router.post('/', skillController.addSkill)
router.put('/:id', skillController.updateSkill)
router.delete('/:id', skillController.deleteSkill)
router.get('/config', skillController.getSkillConfig)
router.get('/config/sheet', skillController.getSkillSheet)
router.post('/config/sheet', skillController.addSkillSheet)
router.delete('/config/sheet/:id', skillController.removeSkillSheet)

export default router

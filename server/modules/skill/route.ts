import express from 'express'
import skillController from './controller'

const router = express.Router()

router.get('/', skillController.getSkill)
router.put('/', skillController.updateSkill)
router.post('/', skillController.addSkill)

//
//
//

router.get('/config', skillController.getSkillConfig)
router.get('/config/sheet', skillController.getSkillSheet)
router.post('/config/sheet', skillController.addSkillSheet)
router.delete('/config/sheet/:id', skillController.removeSkillSheet)
router.get('/config/category', skillController.getSkillCategory)
router.post('/config/category', skillController.addSkillCategory)
router.delete('/config/category/:id', skillController.removeSkillCategory)

export default router

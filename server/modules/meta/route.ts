import express from 'express'
import metaController from './controller'

const router = express.Router()

router.get('/', metaController.getMeta)
router.get('/validation', metaController.validateMeta)
router.put('/', metaController.updateMeta)
router.post('/og/image', metaController.createImageForOpenGraph)
router.put('/homepage', metaController.updateHomepage)

export default router

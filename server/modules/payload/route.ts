import express from 'express'
import payloadController from './controller'

const router = express.Router()

router.get('/', payloadController.getPayload)

export default router

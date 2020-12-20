import express from 'express'
import articleController from './controller'

const router = express.Router()

router.get('/', articleController.getArticle)
router.post('/', articleController.saveArticle)

export default router

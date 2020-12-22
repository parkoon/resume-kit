import express from 'express'
import articleController from './controller'

const router = express.Router()

router.get('/', articleController.getAllArticles)
router.post('/', articleController.addArticle)
router.delete('/:id', articleController.deleteArticle)
router.put('/:id', articleController.updateArticle)

export default router

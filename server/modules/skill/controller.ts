import { Request, Response } from 'express'
import skillService from './service'

const Controller = {
  async getSkill(req: Request, res: Response) {
    try {
      const skills = await skillService.getSkill()
      res.json(skills)
    } catch (err) {
      res.status(500).end()
    }
  },
  async updateSkill(req: Request, res: Response) {
    try {
      await skillService.updateSkill(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async addSkill(req: Request, res: Response) {
    try {
      await skillService.addSkill(req.body)
    } catch (err) {
      res.status(500).end()
    }
  },
  async getSkillConfig(req: Request, res: Response) {
    try {
      const config = await skillService.getSkillConfig()
      res.json(config)
    } catch (err) {
      res.status(500).end()
    }
  },
  async addSkillSheet(req: Request, res: Response) {
    const { sheet } = req.body
    try {
      await skillService.addSkillSheet(sheet)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async getSkillSheet(req: Request, res: Response) {
    try {
      const skillsheet = await skillService.getSkillSheet()
      res.json(skillsheet)
    } catch (err) {
      res.status(500).end()
    }
  },
  async removeSkillSheet(req: Request, res: Response) {
    const { id } = req.params

    try {
      await skillService.removeSkillSheet(id)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async addSkillCategory(req: Request, res: Response) {
    const { category } = req.body
    try {
      await skillService.addSkillCategory(category)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async getSkillCategory(req: Request, res: Response) {
    try {
      const categories = await skillService.getSkillCategory()
      res.json(categories)
    } catch (err) {
      res.status(500).end()
    }
  },
  async removeSkillCategory(req: Request, res: Response) {
    const { id } = req.params

    try {
      await skillService.removeSkillCategory(id)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
}

export default Controller

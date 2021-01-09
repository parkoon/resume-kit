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
    const id = req.params.id
    try {
      await skillService.updateSkill(id, req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async addSkill(req: Request, res: Response) {
    try {
      await skillService.addSkill(req.body)
      res.status(200).end()
    } catch (err) {
      res.status(500).end()
    }
  },
  async deleteSkill(req: Request, res: Response) {
    try {
      await skillService.deleteSkill(req.params.id)
      res.status(200).end()
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
}

export default Controller

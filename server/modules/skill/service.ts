import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { skillPath, skillConfigPath } from '@Server/paths'
import { SkillJSON, SkillConfigJSON, SkillSheet, SkillCategory, Skill } from '@Shared/types/Skill'

const Service = {
  async getSkill() {
    try {
      const { data } = readJSON<SkillJSON>(skillPath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateSkill(skills: Skill) {
    try {
      updateJSON(skillPath, skills)
    } catch (err) {
      throw new Error(err)
    }
  },
  async addSkill(newSkill: Skill) {
    try {
      const skills = await this.getSkill()

      updateJSON(skillPath, [...skills, newSkill])
    } catch (err) {
      throw new Error(err)
    }
  },
  async deleteSkill(id: string) {
    try {
      const skills = await this.getSkill()

      updateJSON(
        skillPath,
        skills.filter((skill) => skill.id !== id)
      )
    } catch (err) {
      throw new Error(err)
    }
  },
  async getSkillConfig() {
    try {
      const { data } = readJSON<SkillConfigJSON>(skillConfigPath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async getSkillSheet() {
    try {
      const { data } = readJSON<SkillConfigJSON>(skillConfigPath)
      return data.sheets
    } catch (err) {
      throw new Error(err)
    }
  },
  async addSkillSheet(sheet: SkillSheet) {
    try {
      const sheets = await this.getSkillSheet()
      const categories = await this.getSkillCategory()
      updateJSON(skillConfigPath, { categories, sheets: [...sheets, sheet] })
    } catch (err) {
      throw new Error(err)
    }
  },
  async removeSkillSheet(id: string) {
    try {
      const sheets = await this.getSkillSheet()
      const categories = await this.getSkillCategory()

      updateJSON(skillPath, { categories, sheets: sheets.filter((s) => s.id === id) })
    } catch (err) {
      throw new Error(err)
    }
  },
  async getSkillCategory() {
    try {
      const { data } = readJSON<SkillConfigJSON>(skillConfigPath)
      return data.categories
    } catch (err) {
      throw new Error(err)
    }
  },
  async addSkillCategory(category: SkillCategory) {
    try {
      const sheets = await this.getSkillSheet()
      const categories = await this.getSkillCategory()
      updateJSON(skillConfigPath, { sheets, categories: [...categories, category] })
    } catch (err) {
      throw new Error(err)
    }
  },
  async removeSkillCategory(id: string) {
    try {
      const sheets = await this.getSkillSheet()

      const categories = await this.getSkillCategory()

      updateJSON(skillPath, { sheets, categories: categories.filter((c) => c.id === id) })
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service

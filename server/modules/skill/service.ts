import { updateJSON, readJSON } from '@Server/helpers/JSONTool'
import { skillPath, skillConfigPath } from '@Server/paths'
import { SkillJSON, SkillConfigJSON, SkillSheet, Skill } from '@Shared/types/Skill'

const Service = {
  async getSkill() {
    try {
      const { data } = readJSON<SkillJSON>(skillPath)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  async updateSkill(id: string, newSkill: Partial<Skill>) {
    try {
      const skills = await this.getSkill()
      const index = skills.findIndex((skill) => skill.id === id)

      const updatedSkill = skills.map((skill) => {
        if (skill.id !== id) {
          return skill
        }

        return {
          ...skill,
          ...newSkill,
        }
      })

      if (index < 0) throw new Error('skill not found')

      updateJSON(skillPath, updatedSkill)
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
      updateJSON(skillConfigPath, { sheets: [...sheets, sheet] })
    } catch (err) {
      throw new Error(err)
    }
  },
  async removeSkillSheet(id: string) {
    try {
      const sheets = await this.getSkillSheet()

      updateJSON(skillConfigPath, { sheets: sheets.filter((s) => s.id !== id) })
    } catch (err) {
      throw new Error(err)
    }
  },
}

export default Service

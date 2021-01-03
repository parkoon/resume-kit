import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import './db'

const app = express()

import profileRoute from './modules/profile/route'
import projectRoute from './modules/project/route'
import skillRoute from './modules/skill/route'
import articleRoute from './modules/article/route'
import careerRoute from './modules/career/route'
import educationRoute from './modules/education/route'
import etcRoute from './modules/etc/route'
import metaRoute from './modules/meta/route'
import systemRoute from './modules/system/route'
import payloadRoute from './modules/payload/route'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/profile', profileRoute)
app.use('/api/projects', projectRoute)
app.use('/api/skills', skillRoute)
app.use('/api/articles', articleRoute)
app.use('/api/careers', careerRoute)
app.use('/api/educations', educationRoute)
app.use('/api/etcs', etcRoute)
app.use('/api/meta', metaRoute)
app.use('/api/system', systemRoute)
app.use('/api/payload', payloadRoute)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: error.message })
})

app.listen(1208, () => {
  console.log('server is running')
})

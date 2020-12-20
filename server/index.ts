import express from 'express'
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

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/profile', profileRoute)
app.use('/api/project', projectRoute)
app.use('/api/skill', skillRoute)
app.use('/api/article', articleRoute)
app.use('/api/career', careerRoute)
app.use('/api/education', educationRoute)
app.use('/api/etc', etcRoute)

app.listen(1208, () => {
  console.log('server is running')
})

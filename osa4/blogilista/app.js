require('dotenv').config({path:'.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO)

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app
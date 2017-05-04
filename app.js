'use strict';

const express = require('express')
const app = express();
const { technologies } = require('./technologies.json')
const { projects } = require('./projects.json')
const { fun } = require('./fun.json')


//set pug config
app.set('view engine', 'pug')

app.locals.title = '||Jared Fuller||'

//middleware

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index', { technologies })
})

app.get('/fun', (req, res, next) => {
  res.render('fun', {page: 'Fun', fun})
})

app.get('/projects', (req, res, next) => {
  res.render('projects', {page: 'Projects', projects})
})






const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`currently listening on port: ${port}`)
})

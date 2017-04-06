'use strict';

const express = require('express')
const app = express();

const { technologies } = require('./technologies.json')
const { projects } = require('./projects.json')
console.log(projects)

//set pug config
app.set('view engine', 'pug')

app.locals.title = '||Jared Fuller||'

//middleware

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index', { technologies })
})

app.get('/about', (req, res, next) => {
  res.render('about', {page: 'About'})
})

app.get('/projects', (req, res, next) => {
  res.render('projects', { projects }, {page: 'Projects'})
})






const port = process.env.port || 8080
app.set('port', port)
app.listen(port, () => {
  console.log(`currently listening on port: ${port}`)
})
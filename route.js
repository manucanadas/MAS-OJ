const { Router } = require('express')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('./home')
  })


  router.get('/wellington', (req, res) => {
    res.render('./form')
  })

  router.get('/wellington/results', (req, res) => {
    res.render('./results')
  })


module.exports = router
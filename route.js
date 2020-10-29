const { Router } = require('express')
const express = require('express')
const router = express.Router()
const db = require('./dbFunctions')

router.get('/', (req, res) => {


    res.render('./home')
  })


  // router.get('/:id', (req, res) => {
  //   res.render('./form')
  // })

  router.get('/:id', (req, res) => {
    db.getRegion(req.params.id)
    .then(locations => {
      console.log (locations)
      res.render('./results', {locations})
    
    })

  })


module.exports = router
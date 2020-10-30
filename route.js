const { Router } = require('express')
const express = require('express')
const router = express.Router()
const db = require('./dbFunctions')

router.get('/', (req, res) => {


    res.render('./home')
  })

  router.get('/:id/results', (req, res) => {
    db.getRegion(req.params.id)
    .then(locations => {
      res.render('./results', {locations})
    })
  })

  router.get('/:id', (req, res) => {
    const id ={
      id: req.params.id
    }
    res.render('./form',id)
  })




  router.post('/:id', (req,res) =>{
    const id = req.params.id
      const filter ={
        difficulty: req.body.difficulty
      }
      console.log(filter)
      res.redirect(`./${id}/results`)
  })


module.exports = router
import { Router } from 'express'

import { notes } from '../data/note-data.js'
const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.render('notes/index', {
    notes:notes
  })
})

export { router }

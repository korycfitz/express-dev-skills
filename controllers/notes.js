import { notes } from '../data/note-data.js'

function index(req, res) {
  res.render('notes/index', {
    notes:notes
  })
}

export {
  index,
}
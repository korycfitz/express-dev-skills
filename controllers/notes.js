import { Note } from '../models/note.js'

function index(req, res) {
  Note.find({})
  .then(notes => {
    res.render('notes/index', {
      notes:notes,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newNote(req, res) {
  res.render('notes/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.finished = false
  Note.create(req.body)
  .then(note => {
    res.redirect('/notes')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/notes')
  })
}


export {
  index,
  newNote as new,
  create,
}

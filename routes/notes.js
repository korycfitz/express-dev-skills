import { Router } from 'express'

import * as notesCtrl from '../controllers/notes.js'
const router = Router()

// GET localhost:3000/users
router.get('/', notesCtrl.index)

export { router }

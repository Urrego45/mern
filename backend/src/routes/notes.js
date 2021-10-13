const {Router} = require('express');
const router = Router(); 

const { getNotes, createNotes, updateNotes, deleteNotes, getNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getNote)
    .put(updateNotes)
    .delete(deleteNotes)

module.exports = router;
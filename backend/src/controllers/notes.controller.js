const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find(); 
    res.json(notes)
}

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body 
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    res.json({message: "save request"});
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json(note)
}

notesCtrl.updateNotes = async (req, res) => {
    const {title, content, author} = req.body

    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    })
    res.json({message: "update request"})
}

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: "delete request"})
}

module.exports = notesCtrl;
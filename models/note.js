const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const NoteSchema = new Schema({
    title: String,
    remarks: String,
});
NoteSchema.plugin(timestamps);
Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
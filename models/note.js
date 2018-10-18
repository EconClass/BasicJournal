const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const NoteSchema = new Schema({
    newsId: {type: String, required: true},
    remarks: String,
});
NoteSchema.plugin(timestamps);
Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
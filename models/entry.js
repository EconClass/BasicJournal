const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const EntrySchema = new Schema({
    title: String,
    content: String,
    newsId: {type: String, required: true}
});
EntrySchema.plugin(timestamps);
Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;

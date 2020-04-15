const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
	title: {type: String, required:true},
	description: {type: String, required:true},
	createAd: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Notes', NoteSchema)
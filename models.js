// Importing mongoose as a requirement.
var mongoose = require('mongoose');

// Declaring the schema for textSchema.
var textSchema = mongoose.Schema({
	text: String,
	name: String
});

// Converts schema into format that MongoDB understands.
var TextBlock = mongoose.model('TextBlock', textSchema);

// Makes TextBlock available to other files.
exports.TextBlock = TextBlock;
const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now() }
});

module.exports = model('Task', TaskSchema, 'tasks');
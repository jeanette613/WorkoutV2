const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logEntrySchema = new Schema(
    {
        type: { type: String, enum: ["POST", "REPLY"] },
        text: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('LogEntry', logEntrySchema);
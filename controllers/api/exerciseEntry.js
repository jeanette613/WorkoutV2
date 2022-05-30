const LogEntry = require('../../models/LogEntry');
const Exercise = require('../../models/Exercise');
const User = require('../../models/User');

module.exports = {
    createEntry
};

async function createEntry(req, res) {

    try {

        const { body } = req
        const user = await User.findById(req.user._id)
        const exercise = await Exercise.findById(req.params.id)
        const logEntry = new LogEntry(body)
        exercise.logEntry.push(logEntry._id)
        logEntry.user = user
        logEntry.save()
        exercise.save()
        res.status(200).json({ message: "Exercise Logged" })

    } catch (e) {
        res.status(400).json(e);
    }

}

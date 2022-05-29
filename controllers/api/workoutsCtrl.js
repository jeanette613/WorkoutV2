const Exercise = require('../../models/Exercise');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const exercise = await Exercise.find({}).sort('exerciseName').populate('muscleGroup').exec();
        // re-sort based upon the sortOrder of the categories
        exercise.sort((a, b) => a.muscleGroup.sortOrder - b.muscleGroup.sortOrder);
        res.status(200).json(exercise);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.status(200).json(exercise);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
const Exercise = require('../../models/Exercise');

module.exports = {
    index,
    show,

};

async function index(req, res) {
    try {
        const exercise = await Exercise.find({}).sort('name').populate('category').exec();
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



// async function create(req, res) {
//     try {
//         //get the body from Request
//         const { body } = req
//         //Find the post from the ID in params
//         const user = await User.findById(req.user._id)
//         //Make the art from the form's body
//         const exercise = new Exercise(body)
//         //push exercise to the Entry List
//         user.exerciseEntry.push(exercise._id)
//         exercise.user = req.user._id
//         //save art to DB
//         exercise.save()
//         //save User to DB
//         user.save()
//         res.status(200).json({ message: "Submitted" })
//     } catch (e) {
//         res.status(400).json(e);
//     }

//     async function remove(req, res) {

//         // const user = await User.findById(req.user._id)
//         try {
//             Exercise.findByIdAndDelete(req.params.id, (err) => {
//                 if (err) {
//                     res.status(400).json(err)
//                 } else {
//                     res.status(200).json({ message: "Entry Deleted" });

//                 }
//             })
//         } catch (e) {
//             res.status(400).json(e);
//         }
//     }

//     async function userLog(req, res) {
//         try {
//             const log = await User.findById(req.user._id).populate("workoutLog").exec();
//             res.status(200).json(log);
//         } catch (e) {
//             res.status(400).json({ msg: e.message });
//         }

//     }
// }

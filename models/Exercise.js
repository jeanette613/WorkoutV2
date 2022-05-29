const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        //https://jaketrent-blog.netlify.app/post/expose-enum-props-in-react
        type: { type: String, required: true, oneOf: ["Resistance", "Calisthenics", "Mobility", "Cardio"] },
        exerciseName: { type: String, required: true },
        muscleGroup: { type: String, required: true, oneOf: ["Legs", "Arms", "Core"] },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true }
    }
)

module.exports - mongoose.model('Exercise', exerciseSchema)
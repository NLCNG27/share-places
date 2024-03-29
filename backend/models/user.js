const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, validate:{
        validator: function(email) {
            return /\S+@\S+\.\S+/.test(email);
        },
        message: "Please enter a valid email."
    } },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String, required: true },
    places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],  // using array for multiple places for one user
});

module.exports = mongoose.model("User", userSchema);

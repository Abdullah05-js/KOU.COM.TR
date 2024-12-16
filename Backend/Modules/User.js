const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "name is required"],
    index:"text"
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  Password: {
    type: String,
    minlength: [6, "too short for password"],
    required: [true, "password  is required"],
  },
  Role: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
    default: "",
  },
});

// UsersSchema.index({UserName:"text"})

const Users = mongoose.model("Users", UsersSchema);


module.exports = Users;

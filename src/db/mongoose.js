const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true, //Removes spaces from entered Data
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

const me = new User({
  name: "  Mike  ",
  email: "nika@me.io",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("error", error);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

// const tasks = new Task({
//   description: "Blah blah blah!!",
//   completed: true,
// });

// tasks
//   .save()
//   .then(() => {
//     console.log(tasks);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

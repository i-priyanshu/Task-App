const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if(req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "iampriyanshu", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "iampriyanshu");
//   console.log(data);
// };
// myFunction();

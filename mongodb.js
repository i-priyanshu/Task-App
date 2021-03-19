// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Priyanshu",
    //     age: 19,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert User");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    //   db.collection("users").insertMany(
    //     [
    //       {
    //         name: "Jan",
    //         age: 28,
    //       },
    //       {
    //         name: "Gunther",
    //         age: 27,
    //       },
    //     ],
    //     (error, result) => {
    //       if (error) {
    //         return console.log("Unable to insert documents!");
    //       }
    //       console.log(result.ops);
    //     }
    //   );
    // }

    // db.collection("users").insertMany(
    //   [
    //     {
    //       description: "blah blah blah!! 1 ",
    //       completed: true,
    //     },
    //     {
    //       description: "blah blah blah 2",
    //       completed: true,
    //     },
    //     {
    //       description: "blah blah blah 3",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to  insert documents ");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);

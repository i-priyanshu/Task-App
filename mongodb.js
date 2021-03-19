// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne({ name: "Jan", age: 1 }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("605487484a387745f4ffdee8"),
    //   },
    //   {
    //     $set: {
    //       name: "Mike",
    //     },
    //   }).then((result) => {
    //     console.log(result);
    //   }).catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteMany({
        completed: false,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

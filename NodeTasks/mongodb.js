//CRUD

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect");
  }

  const db = client.db(database);

  // db.collection("users").insertOne({
  //     name: "Dip Rawal",
  //     age: 28
  // }, (err,result)=>{
  //     if(err){
  //         return console.log("Unable to insert user")
  //     }

  //     console.log(result.ops)
  // })

//   db.collection("users").insertMany(
//     [
//       { name: "Rumi", age: 25 },
//       { name: "Kabango", age: 7 },
//     ],
//     (err, result) => {
//       if (err) {
//         return console.log("Unable to insert user");
//       }

//       console.log(result.ops);
//     }
//   );
  // console.log("Connected")

    db.collection("tasks").insertMany(
    [
      { descriptions: "Rumi is sexy", completed: true },
      { descriptions: "Kabango is a doggo", completed: true },
    ],
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user");
      }

      console.log(result.ops);
    }
  );
});

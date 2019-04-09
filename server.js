const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const Book = require("./models/Book.js");
const PORT = process.env.PORT || 4000;

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);

//routes
app.use("/api/books", require("./routes/api/books"));
// let newBook = {
//     title: "latest book",
//     authors: "will rackley",
//     description: "asdfasdfas",
//     image: "sadfasdf",
//     link: "ahsdfjahsdf"
//   }
// Book.create(newBook)
// .then(function(dbExample) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbExample);
//   })
//   .catch(function(err) {
//     // If an error occurs, log the error message
//     console.log(err.message);
//   });
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

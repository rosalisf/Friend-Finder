const express = require("express");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// const server = http.createServer(handleRequest);

// // Start our server
// server.listen(PORT, function() {
//   // Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:" + PORT);
// });

// // Create a function which handles incoming requests and sends responses
// function handleRequest(req, res) {
//   // Capture the url the request is made to
//   var path = req.url;

//   // Depending on the URL, display a different HTML file.
//   switch (path) {
//     case "/":
//       return displayRoot(res);

//     case "/survey":
//       return displaySurvey(res);

//     default:
//       return display404(path, res);
//   }
// }

// function displayRoot(res) {
//   // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// // When someone visits the "http://localhost:8080/Survey" path, this function is run.
// function displaySurvey(res) {
//   // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// // When someone visits any path that is not specifically defined, this function is run.
// function display404(url, res) {
//   var myHTML =
//     "<html>" +
//     "<body><h1>404 Not Found </h1>" +
//     "<p>The page you were looking for: " +
//     url +
//     " can not be found</p>" +
//     "</body></html>";

//   // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
//   res.writeHead(404, { "Content-Type": "text/html" });

//   // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
//   res.end(myHTML);
// }

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information
// ===============================================================================

const friendArray = require("../data/friends");
//const friendData = require("/api/survey");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out the survey... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // access req.body
    // follow homework_instructions.md for algorithm
    // algorithm should give you a recommended friend
    // before you send friend, push the new friend to friendArray
    // res.json() OR res.send() to send recommended friend to front end
    // if (friendArray.length < i) {
    //   friendArray.push(req.body);
    //   res.json(true);
    // } else {
    //   friendArray.push(req.body);
    //   res.json(false);
    // }
    let userAnswers = req.body.scores;
    let minimumDifferense;
    let closestFriend;
    friendArray.forEach(function(friend) {
      let element = friend.scores;
      let totalDifference = 0;
      for (let index = 0; index < userAnswers.length; index++) {
        totalDifference += Math.abs(userAnswers[index] - element[index]);
      }
      if (!minimumDifferense || totalDifference > minimumDifferense) {
        minimumDifferense = totalDifference;
        closestFriend = friend;
      }
    });
    res.json(closestFriend);
    friendArray.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendArray.length = 0;
    friendData.length = 0;

    res.json({ ok: true });
  });
};

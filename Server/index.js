// Load the express module
const express = require('express');

// Create an express application
const app = express();


// Start the server and listen on the specified port
app.listen(3000, () => {
  console.log("Server running");
});

const express = require("express");
const cors = require('cors')
// Database admin Keys and configurations
const env = require("./config/enviroment");
// Firestore configurations
const app = express();

// The intent of using default cors config is to access the backend with android application only
app.use(
    cors()
);

app.use("/", require("./routes/index"));

const server = app.listen(process.env.PORT || 8000, function (err) {
  if (err) {
    return console.log("Error Occured while starting the app: ", err);
  }
  return console.log("App has been started on PORT: ", process.env.PORT || 8000);
});
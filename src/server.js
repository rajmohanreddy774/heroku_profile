const app = require("./index");
const connect = require("./configs/db");
require('dotenv').config();
const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
  try {
     connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.error(err.message);
  }
});

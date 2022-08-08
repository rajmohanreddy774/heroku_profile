const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
// console.log(process.env.MONGO_URL)
module.exports = () => {
  return mongoose.connect(
   process.env.MONGO_URL,{useNewUrlParser:true}
  );
};

const mongoose = require("mongoose");
async function connectMongoDb(url) {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(`Error While Connecting to mongodb ${err}`);
  }
}

module.exports = {
    connectMongoDb
}

const mongoose = require("mongoose");
const connectMongoDb = require("../connection");
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,    
    },
    visitHistory: [
      {
        timestamp: Date,
      },
    ],
  },
  { timestamps: true }
);

const urlModel = mongoose.model('urlModel', urlSchema);

module.exports = urlModel;

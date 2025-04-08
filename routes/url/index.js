const express = require("express");
const router = express.Router();

const handleGenerateNewShorturl = require("./handleGenerateNewShorturl");
const handleGetShortUrl = require("./handleGetShortUrl");
const handleGetAnalytics = require("./handleGetAnalytics");
const handleGetAllurls = require("./handleGetAllurls"); 
const GetAllurls = require("./GetAllurls.js"); 
const new1 = require("./new1.js"); 

router.use("/", handleGenerateNewShorturl);
// router.use("/", handleGetShortUrl);
router.use("/", handleGetAnalytics);
// router.use("/", handleGetAllurls);
// router.use("/", GetAllurls);

module.exports = router;
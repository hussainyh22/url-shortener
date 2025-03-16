const express = require("express");
const router = express.Router();
// const {} = require("../middlewares/index");
const {handleGenerateNewShorturl, handleGetAllurls, handleGetShortUrl, handleGetAnalytics} = require("../controller/url");

router.post("/", handleGenerateNewShorturl);

router.get("/:shortId", handleGetShortUrl);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/", handleGetAllurls);
router.get("/all", handleGetAllurls)

module.exports = router;
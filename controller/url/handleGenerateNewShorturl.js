const shortid = require("shortid");
const urlModel = require("../../model/url");

async function handleGenerateNewShorturl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      error: "URL is Required :",
    });
  }
  const shortId = shortid();
  console.log(shortId);
  await urlModel.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}

module.exports = handleGenerateNewShorturl;
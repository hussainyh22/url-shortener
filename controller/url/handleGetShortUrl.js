const urlModel = require("../../model/url");

async function handleGetShortUrl(req, res) {

  const shortId = req.params.shortId;
  console.log(`ShortId = ${shortId}`);
  try {
      const target = await urlModel.findOneAndUpdate({ 'shortId': shortId }, {$push:{
        visitHistory:{
          timestamp: Date.now()
        },

      }});
      if (!target) {
          return res.status(404).json({ error: "Short URL not found" });
      }
      console.log(`ShortId = ${shortId}`);
      console.log(`Target = ${target}`);
      var originalUrl = target.redirectUrl;
      console.log(originalUrl);

        // Check if originalUrl has a valid protocol, otherwise add it
        if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
          originalUrl = `http://${originalUrl}`;
      }

      res.redirect(originalUrl);
  } 
  catch (error) {
      console.error(`Error: ${error.message}`, error.stack);
      return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handleGetShortUrl;
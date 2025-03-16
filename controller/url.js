const shortid = require("shortid");
const urlModel = require("../model/url");

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




async function handleGetAnalytics(req, res)
{
  
  const shortId = req.params.shortId;
  try{
    const data = await urlModel.findOne({shortId});

    if(!data)
      return res.status(404).json({error: 'The Url Does Not exist in the DB'});
    const analyticsData = data.visitHistory;
    const analyticsLength = data.visitHistory.length;
    return res.status(200).json({length: analyticsLength, analytics: analyticsData});
  }

  catch(err){
    console.log(`Error Occured: ${err}`);
    return res.status(500).json({error: 'An Error Occured'});
    
  }
  

}


async function handleGetAllurls(req, res){
  try{
    const data = await urlModel.find({});
    if(!data)
      return res.status(404).json({error: "Nothing to Fetch"});

    return res.status(200).json(data);
  }
  catch(err){
    console.log(`Error Occurred: ${err}`);
    return res.status(500).json({error: "Internal Server Error"});
  }
  
}


module.exports = {
  handleGenerateNewShorturl,
  handleGetShortUrl,
  handleGetAnalytics,
  handleGetAllurls
};

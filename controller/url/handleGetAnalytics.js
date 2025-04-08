const urlModel = require("../../model/url");

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

module.exports = handleGetAnalytics;
const urlModel = require("../../model/url");

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

  module.exports = handleGetAllurls;
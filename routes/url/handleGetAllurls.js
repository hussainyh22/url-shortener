const express = require("express");
const router = express.Router();
const {url:{handleGetAllurls}} = require("../../controller");

router.get("/", async (req, res)=>{
    try{
        await handleGetAllurls(req, res);
    }catch(e){
        console.log('Error occured While Inserting the Data - '+e);
        return res.status(500).send({err: 'Error Inserting the Data'})
    }
});

module.exports = router;
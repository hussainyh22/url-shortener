const express = require("express");
const router = express.Router();
const {url: {new1}} = require("../../controller/"); 

router.get("/", async (req, res)=>{
    try{
        await new1(req, res);
    }catch(e){
        console.log('Error occured While Displaying the Data - '+e);
        return res.status(500).send({err: 'Error Displaying the Data'})
    }
});

module.exports = router;
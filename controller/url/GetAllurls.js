const urlModel = require("../../model/url");
// const home = require("../../views/home.ejs");

async function GetAllurls(req, res){
    const allData = await urlModel.find({});
    console.log(allData);
   try{ const html = `<ol>
        ${allData.map((u) => `<li> ${u.redirectUrl}: ${u.shortId}</li>: ${u.visitHistory.length}`).join("")}
    </ol>`;
    res.send(html);
    // return res.render('home');
}
    catch(e){
        console.log(`Error Occured: ${e}`);
        res.status(500).send('Error Occured');
    }
}

module.exports = GetAllurls;
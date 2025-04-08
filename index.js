// https://zelark.github.io/nano-id-cc/
const express = require("express");
const app = express();
const PORT = 3002;
const path = require("path");
const {connectMongoDb} = require("./connection");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/url/new1");

// mongoose.connect('mongodb://localhost:27017/url-shortener')
// .then(()=> console.log(`Connection Established Successfully!`))
// .catch((err) => console.log(`Error in Connecting with MongoDb - ${err}`));

app.use(express.urlencoded({extended:true}));
app.use("/url", urlRoute);
app.use("/", staticRoute);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
// console.log(typeof urlRoute); // Should print 'function'


//connection
connectMongoDb("mongodb://localhost:27017/urlShortener")
.then(()=> console.log(`MongoDB is Connected`))
.catch((err) => console.log(`Error connecting to MongoDb: ${err}`));

app.listen(PORT, ()=> console.log(`SERVER HAS STARTED ON PORT: ${PORT}`));

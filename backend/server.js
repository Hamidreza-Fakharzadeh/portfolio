const express = require("express");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { response } = require("express");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); 
const arr = [];
                                              

app.get("/", (request, response) => {
      response.json(arr)
})
app.post("/", (request,response) => {
      const msg = request.body;
      arr.push(msg)
      console.log(arr)
      response.json(msg)
      
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}...`))                                                                                                                       
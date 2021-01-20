const express = require("express");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { response } = require("express");


const transporter = nodemailer.createTransport({
      host: "localhost:8080",
      port: 587,
      auth: {
            user: "hrfarzadeh@gmail.com",
            pass: process.env.PASS
      },
      rejectUnauthorized:false
})

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); 
const arr = [{test: "just a test for Aws ec2 instance"}];

                                              

app.get("/", (request, response) => {
      response.json(arr)
})
app.post("/", (request,response) => {
      const msg = request.body;
      arr.push(msg)
      let mailOptions = {
            from: "hrfarzadeh@gmail.com",
            to: "hamidrezaf262@gmail.com",
            subject: "Notification From QueueAndA",
            text: request.body.message,
            html: `<div>${request.body.message}<h1>QueueAndA</h1><br><h3>Hi</h3><h3>Your question is: </h3><h2>Hi</h2><h3>You can follow the link and get answer. </h3></div>`,
          };
      transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
      console.log(arr)
      response.json(msg)
      
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}...`))                                                                                                                       
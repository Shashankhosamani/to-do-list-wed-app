//jshint  esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
let items = ["eat", "cook", "but"];
let workItems = [];
let day=date.getDay();

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function(req, res) {

  res.render("list", {
    listTitle: day,
    newlistitems: items
  });


});
app.post("/", function(req, res) {
  let item = req.body.newitem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");

  }
});
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "work list",
    newlistitems: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newitem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000, function() {
  console.log("server is running");
});

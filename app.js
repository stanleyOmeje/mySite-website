const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
app.set("view engine", "hbs");
//app.set("view engine", "ejs");

//console.log(__filename);

const p = path.join(__dirname, "./public");
const myPartials = path.join(__dirname, "./partials");
hbs.registerPartials(myPartials);
//hbs.registerPartials(myPartials);
//console.log(p);

app.use(express.static(p));
//console.log(p);

app.get("/", (req, res) => {
  res.render("index", {
    title: "The weeping Lion",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/chek", (req, res) => {
  res.render("checker", {
    title: "The weeping Lion",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/cheks", (req, res) => {
  res.send("checkering", {
    title: "The weeping Lion",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/aboutus", (req, res) => {
  res.render("aboutus", {
    title: "The weeping Lion: About us",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    title: "The weeping Lion: Weather",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/weatherCon", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Kindly provide Your address",
    });
  }
  res.send({
    title: "Our Weather Location",
    Location: "Enugu",
    details: req.query.address,
  });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/blog", (req, res) => {
  res.render("index", {
    title: "The weeping Lion: Blog",
    body: "When the Lion weep",
    details:
      "In the day of old, a little before rennaissance, there live a lion in a cave of Guntor.",
  });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send("You must provide a search criterium");
  }

  console.log(req.query);
  res.send({
    product: [],
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});

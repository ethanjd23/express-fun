const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
let submissionsArray = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/formsubmissions", (req, res) => {
    submissionsArray.push({ email: req.body.email, name: req.body.name })

  fs.writeFileSync(
    path.join(__dirname, "../public/submissions.json"),
    JSON.stringify(submissionsArray),
    (err) => {
      if (err) throw err;
    }
  );
  res.redirect("/");
//   res.sendFile(path.join(__dirname, "../public/submissions.json"));
});


// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// })

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Hello from the server side...");
});

app.listen(3000);

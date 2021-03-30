const express = require("express")
const path = require("path");

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.resolve("landing-page.html"));
});

app.use(express.static(path.join(__dirname + "/")))

app.listen(3002, () => {
    console.log(`Server is running on port 3002`)});
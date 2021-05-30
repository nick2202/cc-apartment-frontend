const express = require("express")
const path = require("path");

const app = express();

app.use(express.static("public"))
app.use(express.static("scripts"))

app.get('/', function(req, res) {
    res.sendFile(path.resolve("public/home.html"));
});

app.listen(3002, () => {
    console.log(`Server is running on port 3002`)});
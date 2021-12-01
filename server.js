// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const cors = require("cors");
// =======================================
//              IMPORT JSON
// =======================================
const projects = require("./projects.json");
const about = require("./about.json");
const resume = require("./resume.json");
// =======================================
//              APP OBJECT
// =======================================
const app = express();
// =======================================
//              MIDDLEWARE
// =======================================
app.use(cors());
// =======================================
//              ROUTES
// =======================================
// INDEX (get)
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
});


// NEW (get)
// DESTROY (delete)
// UPDATE (put)
// CREATE (post)
//EDIT (get) (put)
// SHOW (get)
// =======================================
//              LISTENER
// =======================================
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
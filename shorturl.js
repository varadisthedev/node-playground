// server.js
const express = require("express");
const crypto = require("crypto");
const app = express();

app.use(express.json());

const db = {}; // In-memory key:value store

// Create short URL
app.post("/shorten", (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL required" });

    const id = crypto.randomBytes(3).toString("hex"); // 6-char short id
    db[id] = url;

    res.json({ shortUrl: `http://localhost:3000/${id}` });
});

// Redirect to original URL
app.get("/:id", (req, res) => {
    const url = db[req.params.id];
    if (!url) return res.status(404).send("Invalid link");

    res.redirect(url);
});

app.listen(3000, () => console.log("Server running on port 3000"));

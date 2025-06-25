const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;

const serverRoutes = require("./routes/serverRoutes");
app.use("/", serverRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler to serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Node server started at ${port}`));

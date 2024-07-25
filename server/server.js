const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;

const serverRoutes = require("./routes/serverRoutes");
app.use("/", serverRoutes);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, () => console.log(`Node server started at ${port}`));

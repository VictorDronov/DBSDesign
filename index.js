const express = require("express");

const helmet = require("helmet");//provides security defaults

const server = express();
server.use(helmet());
server.use(express.json())

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.status(200).json({ Data: "WORKING" });
});

server.listen(port, () => {
  console.log(`API running on port ${port} `);
});

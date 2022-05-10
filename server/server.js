const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.post("/enquiry", (req, res) => {
  console.log(req.body);
  res.status(200);
  res.send({ Mesage: "Data Received" });
});
app.listen(PORT, () => console.log(`Server app listening on port ${PORT}`));

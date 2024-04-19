const express = require("express");
const app = express();
const port = 7500;


const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const serviceRoute = require("./routes/serviceRoute");


app.get("/", (req, res) => {
  res.send("Here is Your Home Page");
});

app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(serviceRoute);

app.listen(port, () => {
  console.log(
    `server started successfully. click http://localhost:${port} to connect to server`
  );
});

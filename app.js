const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

const swaggerOptions = require("./swagger.json");
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api", require("./routes/api.route"));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));

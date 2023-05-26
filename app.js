const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connecté à la base de donnée");
  })

  .catch((error) => {
    console.error(error);
  });

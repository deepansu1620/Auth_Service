const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");
// const {user} = require('./models/index');
// const bcrypt = require("bcrypt");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(3001, async () => {
    console.log(`server started on Port : ${PORT}`);
    // const incomingpassword = '123456';
    // const user = await user.findByPk(3);
    // const response = bcrypt.compareSync(incomingpassword, user.password);
    //console.log(response);
  });
};

prepareAndStartServer();

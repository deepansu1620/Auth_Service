const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

//const UserService = require("./services/user-service");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(3001, async () => {
    console.log(`server started on Port : ${PORT}`);

    // const service = new UserService();
    // const newToken = service.createToken({ email: "sanket@admin.com", id: 1 });
    // console.log("new token is", newToken);
  });
};

prepareAndStartServer();

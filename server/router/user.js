const express = require("express");
const userRouter = express.Router();
const {
  signIn,
  signup,
  watchlater,
  addtoWathclater,
  watchlater1,
} = require("../controller/userController");
const { checkAuth } = require("../middleware/checkAuth");

userRouter.post("/signIn", signIn);

userRouter.post("/signUp", signup);

userRouter.get("/watchlist", checkAuth, watchlater);

userRouter.post("/addwatchlater", checkAuth, addtoWathclater);

module.exports = userRouter;

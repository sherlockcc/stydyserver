const express = require("express")
const path = require("path")

const accountRouter = express.Router();
const accountCTRL = require(path.join(__dirname,"../controllers/accountController"))

accountRouter.get("/login",accountCTRL.getLoginPage)
accountRouter.get("/vcode",accountCTRL.getImageVcode)
accountRouter.post("/login",accountCTRL.login)


module.exports = accountRouter
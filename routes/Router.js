const Router = require("express").Router()
const EmployeeRouter = require("./EmployeeRouts")

Router.use("/", EmployeeRouter)

module.exports = Router
const express=require("express")
const apiRoutes = require("./api")
const routes=express.Router()

routes.use("/api/v1",apiRoutes)

module.exports=routes
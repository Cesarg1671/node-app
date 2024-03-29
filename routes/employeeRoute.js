import express from "express"
import {create, fetch} from "../controller/employeeContoller.js"
const route = express.Router()

route.post("/create", create)
route.get("/fetch", fetch)

export default route
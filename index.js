import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

const app = express()
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGOUL = process.env.MONGO_URL

mongoose.connect(MONGOUL).then( ()=> {
    console.log("Database Connected Successfully")

    app.listen(PORT, ()=> {
        console.log('Server is running on port ${PORT}')
    })
}).catch( error => console.log(error))
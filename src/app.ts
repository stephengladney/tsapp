require("dotenv").config()

import express from "express"
// import bodyParser from "body-parser"
import { resolve } from "path"
import routes from "./routes/"

const app = express()

app.use(express.static(resolve(__dirname, "./client/test.html")))
app.use(routes)

app.listen(Number(process.env.PORT) || 5000, () => {
  console.log("TSApp server is now running!")
})

require("dotenv").config()

import express from "express"
// import bodyParser from "body-parser"
import path from "path"
import routes from "./routes/"

const app = express()

app.use(express.static(path.resolve("build")))
app.use(routes)

app.listen(Number(process.env.PORT) || 5000, () => {
  console.log("TSApp server is now running!")
})

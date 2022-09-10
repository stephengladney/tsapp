import { Request, Response, Router } from "express"
import * as path from "path"

const router = Router()

type RouteHandler = (req: Request, res: Response) => void

const FirstEndpoint: RouteHandler = (req, res) => {
  res.status(200).send("Hello")
}

router.get("/endpoint", FirstEndpoint)
router.get("/*", (_: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})

export default router

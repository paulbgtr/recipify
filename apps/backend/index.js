import express from "express";
import cors from "cors";
import router from "./router.js";
import bodyParser from "body-parser";
import "dotenv/config";
import pkg from "express-jwt";
const { expressjwt } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  expressjwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }).unless({
    path: ["/signin", "/signup", /^\/comments\/.+$/],
  })
);
app.use(router);

app.get("/", router);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

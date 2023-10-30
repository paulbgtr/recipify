import express from "express";
import cors from "cors";
import router from "./router.js";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(router);
app.use(cors());

app.get("/", router);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

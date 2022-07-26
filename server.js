import http from "http";
import app from "./app.js";

const port = 1000;

app.listen(port, () => console.log(port));
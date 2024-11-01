import express from "express";
import dotenv from 'dotenv'

const app = express();
dotenv.config({path: './.env'})
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(200).send("OK");
});
app.post("/", (request, response) => {
  response.status(201).send("Created");
});
app.put("/", (request, response) => {
  response.status(202).send("Accepted");
});
app.delete("/", (request, response) => {
  response.status(204).send("No Content");
});

app.listen(port, () => console.log("Server running on port ", port));

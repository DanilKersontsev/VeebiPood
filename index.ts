import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
const app: Express = express();
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";

const bodyParser = require('body-parser')




mongoose.connect("mongodb+srv://danilkersontsev:RuXljyzqYsqZTUQF@cluster0.gbyd0iv.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', stringsController);
app.use('/', articleController)
app.use('/', commentController);
app.use('/', authorController)

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
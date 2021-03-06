import express from "express"
import dotenv from "dotenv"
import config from "./config.js"
import mongoose from 'mongoose'
import userRoute from "./routes/userRoute.js"
import bodyParser from 'body-parser'
import productRoute from "./routes/productRoute.js"
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config()
const mongodbUrl = config.MONGODB_URL

// const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason))


const app = express()
app.use(bodyParser.json())
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use(express.static(path.join(__dirname, '../frontend/','build')));

const PORT = process.env.PORT || 3001

// const moduleURL = new URL(import.meta.url);
// const __dirname = path.dirname(moduleURL.pathname);


app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname, '../frontend','build','index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(PORT, ()=>{
    console.log("Server running at http://localhost:" + PORT)
})


// const mongoose = require('mongoose');
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log(`Successfully started on port ${port}`);
});
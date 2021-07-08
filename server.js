const connection = require("./connection");
const council = require("./council")
const PORT = 7000;
const express = require("express")
const app = express()
app.use(express.json())

app.use(council)

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`);
})



const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes)
app.use("/api", apiRoutes)


app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

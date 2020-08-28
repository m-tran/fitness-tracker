const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
// require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.use(express.static(path.join(__dirname, 'client/public')));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
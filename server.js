// Required Modules
const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 7000;

// allows cross origin requests
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

// Connecting to mlab database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds129233.mlab.com:29233/music-stream`, {useNewUrlParser: true}, () => console.log('..now connected to "music-stream-full-steack-db".'))
    .catch(err => console.log(err));

app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`..server is now listening on port ${PORT}.`);
});
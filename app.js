const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey, Just trying to set up a Continuous Delivery Pipeline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

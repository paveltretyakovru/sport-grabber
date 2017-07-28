const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({credentials: true, origin: 'http://localhost:8081'}));

// Require routes
const eventsRoutes = require('./src/backend/events/events.routes');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Init routes
app.use('/events', eventsRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
var express = require('express');
var app = express();

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
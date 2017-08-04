const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3000)
app.set('host', process.env.SERVER_HOST || 'localhost')
app.set('frontHost', process.env.FRONT_HOST || 'localhost:8080')

app.use(cors({credentials: true, origin: `http://${app.get('frontHost')}`}));

// Require routes
const eventsRoutes = require('./src/backend/events/events.routes');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Init routes
app.use('/events', eventsRoutes);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});
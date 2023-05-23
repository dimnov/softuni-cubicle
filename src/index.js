const express = require('express');
const handlebars = require('express-handlebars');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
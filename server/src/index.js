const app = require('express')()
const cors = require('cors');
require('../database/database.js')

app.use(require("express").urlencoded({extended: true}));
app.use(require("express").json());
app.use(cors())
/* Dirs */
const mainRoute = require('./routes/main');
const saveGroupRoute = require('./routes/saveGroup')
const getCurrentTopRoute = require('./routes/getCurrentTop')

/* Route Creation */
app.use('/', mainRoute)
app.use('/saveGroup', saveGroupRoute)
app.use('/getCurrentTop', getCurrentTopRoute)

app.listen(5000, () => {
  console.log('Server on port 5000');
});   
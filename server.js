const app = require('express')()
const cors = require('cors');
require('./database/database.js')

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(require("express").urlencoded({extended: false}));

/* Dirs */
const mainRoute = require('./routes/main');
const existUserRoute = require('./routes/existUser')

/* Route Creation */
app.use('/', mainRoute)
app.use('/existUser', existUserRoute)

app.listen(5000, () => {
  console.log('Server on port 5000');
});   
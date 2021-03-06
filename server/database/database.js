require('dotenv').config({path:__dirname+'/../../.env'})
const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Connected to MongoDB'))
.catch(err => console.error(err))
const mongose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.log(err));
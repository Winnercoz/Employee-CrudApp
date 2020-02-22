const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB', (err) => {
    if(!err) console.log('connected to DB')
    else{
        console.log( err + 'found')
    }
});


module.exports = mongoose;
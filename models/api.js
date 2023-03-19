const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema ({
    api : String
});

const apis = mongoose.model('api', ApiSchema);

module.exports = apis;
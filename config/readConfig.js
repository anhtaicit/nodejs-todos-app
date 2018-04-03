var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds227469.mlab.com:27469/node-todos`
    }
}
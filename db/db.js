var mongoose = require('mongoose');

var connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;

mongoose.connect('mongodb://' + connection_string, function(err) {
    if(err) {
        console.log('err '+err);
    } else {
        console.log('connection established ');
    }
});
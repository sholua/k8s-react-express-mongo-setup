const mongoose = require('mongoose');

const {
  MONGO_HOSTNAME,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_HOSTNAME}/${MONGO_DB}`;

mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected');
})
  .catch(function (err) {
    console.log('Could not connect to MongoDB...', err);
  });

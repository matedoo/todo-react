const mongoose = require('mongoose');

const URI ="mongodb+srv://mateu:Polpolpol1@cluster0-yssqc.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
const { MongoClient } = require("mongodb");

exports.conn = new MongoClient(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}/${process.env.DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

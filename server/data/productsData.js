const main = require("../infra/database");

exports.getProducts = async (page) => {
  const offset = page ? page * 10 : 0;
  const client = await main.conn.connect();
  const collection = client.db(process.env.DB).collection("products");
  const items = await collection.find().skip(offset).limit(10).toArray();

  client.close();
  return items;
};

exports.getOneProduct = async (code) => {
  const client = await main.conn.connect();
  const collection = client.db(process.env.DB).collection("products");
  const item = await collection.findOne({ code });

  client.close();
  return item;
};

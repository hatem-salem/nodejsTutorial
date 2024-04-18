const express = require("express");
const { people, products } = require("./data");
const app = express();
app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>");
});
app.get('/api/products', (req, res) => {
  res.json(products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  }));
});
app.get('/api/products/:productId', (req, res) => {
  const product = products.find((product) => product.id === Number(req.params.productId));
  if (!product) {
    return res.status(404).send("Product doesn't exist!");
  }
  res.json(product);
});
app.get("/api/v1/products", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search));
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send('no products matched your search');
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
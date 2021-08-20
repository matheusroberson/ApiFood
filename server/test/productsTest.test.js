const axios = require("axios");

describe("Tests Endpoints", () => {
  test("GET /", async function () {
    const response = await axios({
      url: "http://localhost:8000",
      method: "get",
    });
    const text = response.data;
    const statusCode = response.status;

    expect(statusCode).toBe(200);
    expect(text).toBe("Fullstack Chanllage 2021");
  });

  test("GET /products", async function () {
    const response = await axios({
      url: "http://localhost:8000/products?page=9",
      method: "get",
    });
    const products = response.data;

    const statusCode = response.status;
    expect(statusCode).toBe(200);

    expect(products).toHaveLength(10);
  });

  test("GET /products:code", async function () {
    const response = await axios({
      url: "http://localhost:3000/products",
      method: "get",
    });
    const code = response.data[0].code;

    const responseOneProduct = await axios({
      url: "http://localhost:3000/products/" + code,
      method: "get",
    });

    const statusCode = responseOneProduct.status;
    const product = responseOneProduct.data;

    expect(statusCode).toBe(200);
    expect(product.code).toBe(code);
  });
});

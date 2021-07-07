import Product from "../Models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find().sort({
    createdAt: -1,
  });
  return res.send(products);
};

export const getProduct = async (res, req) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  return res.send(product);
};

export const addProduct = async (req, res) => {
  const { title, file, description, price } = req.body;
  const newProduct = await new Product.save({
    title,
    file,
    description,
    price,
  });
  return res.send(newProduct);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, file, description, price } = req.body;

  const updatedProduct = { title, file, description, price, _id: id };
  await Product.findByIdAndUpdate(id, updatedProduct);
  res.send(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send({ message: "Post deleted Succesfully" });
};
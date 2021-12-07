import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

import api from "../../apis/api";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product");

        setProductList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="list-group">
        {productList.map((currentProductObj) => (
          <ProductCard key={currentProductObj._id} {...currentProductObj} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

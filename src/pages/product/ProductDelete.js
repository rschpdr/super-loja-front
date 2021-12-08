import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteProduct() {
      try {
        await api.delete(`/product/${id}`);
        navigate("/product/list");
      } catch (err) {
        console.error(err);
      }
    }
    deleteProduct();
  }, [id, navigate]);

  return <div>Deletando...</div>;
}

export default ProductDelete;

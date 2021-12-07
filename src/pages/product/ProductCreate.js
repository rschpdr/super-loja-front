import { useState } from "react";
import CreatableSelect from "react-select/creatable";

import FormField from "../../components/forms/FormField";
import SelectInput from "../../components/forms/SelectInput";

import api from "../../apis/api";

function ProductCreate() {
  const [productData, setProductData] = useState({
    name: "",
    manufacturer: "",
    price: 0,
    inStock: 0,
    pictureUrl: "",
    category: "Outros",
    tags: [],
    currentTag: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const { currentTag, tags } = productData;

      setProductData({
        ...productData,
        currentTag: "",
        tags: [...tags, { label: currentTag, value: currentTag }],
      });

      e.preventDefault();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post("/product", {
        ...productData,
        tags: productData.tags.map((currentTagObj) => currentTagObj.value),
      });

      console.log(response);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome do Produto"
          id="productFormName"
          name="name"
          onChange={handleChange}
          value={productData.name}
          required
          readOnly={loading}
        />

        <FormField
          label="Fabricante"
          id="productFormManufacturer"
          name="manufacturer"
          onChange={handleChange}
          value={productData.manufacturer}
          required
          readOnly={loading}
        />

        <FormField
          type="number"
          label="Preço do produto"
          id="productFormPrice"
          name="price"
          onChange={handleChange}
          value={productData.price}
          required
          min="0"
          readOnly={loading}
        />

        <FormField
          type="number"
          label="Quantidade em estoque"
          id="productFormInStock"
          name="inStock"
          onChange={handleChange}
          value={productData.inStock}
          required
          min="0"
          readOnly={loading}
        />

        <FormField
          label="Imagem"
          id="productFormPicture"
          name="pictureUrl"
          onChange={handleChange}
          value={productData.pictureUrl}
          readOnly={loading}
        />

        <SelectInput
          label="Categoria"
          id="productFormCategory"
          name="category"
          onChange={handleChange}
          value={productData.category}
          items={[
            "Celular/Smartphone",
            "Computador/Notebook",
            "Acessórios",
            "Outros",
          ]}
          readOnly={loading}
        />

        {/* <FormField
          label="Tags"
          id="productFormTags"
          name="tag"
          onChange={handleChange}
          value={productData.tag}
        /> */}

        <CreatableSelect
          components={{ DropdownIndicator: null }}
          inputValue={productData.currentTag}
          isClearable
          isMulti
          menuIsOpen={false}
          className="mb-3"
          onChange={(value) => {
            setProductData({ ...productData, tags: [...value] });
          }}
          onInputChange={(inputValue) => {
            setProductData({ ...productData, currentTag: inputValue });
          }}
          onKeyDown={handleKeyDown}
          placeholder="Escreva as tags do produto"
          value={productData.tags}
        />

        <div className="mb-3 text-right">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                <span>Carregando...</span>{" "}
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductCreate;

import { nanoid } from "@reduxjs/toolkit";
import { useReducer, useState } from "react";
const Ss3 = () => {
  const initialvalue = {
    products: [
      {
        id: 1,
        name: "Iphone 12",
        price: 1000,
      },
    ],
  };

  const handleAddProduct = () => {
    dispatch({ type: "add", payload: { product, price: parseFloat(price) } });
    setProduct("");
    setPrice("");
  };
  function addProduct(state, action) {
    const newProduct = {
      id: nanoid,
      name: action.payload.name,
      price: action.payload.price,
    };
    return {
      products: [...state.products, newProduct],
    };
  }

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return addProduct(state, action);
      case "delete":
        return {
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
    }
  }
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter product name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product name"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddProduct}>ADD</button>

      {state.products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <button
              onClick={() => dispatch({ type: "delete", payload: product.id })}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ss3;

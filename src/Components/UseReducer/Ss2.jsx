import { nanoid } from "@reduxjs/toolkit";
import { useReducer, useState } from "react";

const initialValue = {
  products: [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
    },
  ],
};

function addProduct(state, action) {
  const newProduct = {
    id: nanoid(),
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
    default:
      return state;
  }
}

const Ss2 = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleAddProduct = () => {
    dispatch({ type: "add", payload: { name, price: parseFloat(price) } });
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddProduct}>Add</button>

      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            Name: {product.name} Price: {product.price} $
            <button
              onClick={() => dispatch({ type: "delete", payload: product.id })}
              className="pl-8"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ss2;

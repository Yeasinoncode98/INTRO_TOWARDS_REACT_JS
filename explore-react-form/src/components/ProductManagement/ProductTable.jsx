import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h3>Products: {products.length}</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index + 1}>
              <td style={{ border: "2px solid red" }}>{index + 1}</td>
              <td style={{ border: "2px solid red" }}>{product.name}</td>
              <td style={{ border: "2px solid red" }}>{product.price}</td>
              <td style={{ border: "2px solid red" }}>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

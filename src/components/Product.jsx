import React from "react";
import { Link } from "react-router-dom";
const Product = ({ products }) => {
  return (
    <div className="container p-8 bg-slate-50 flex flex-col gap-4 justify-between">
      {products.map((item) => {
        return (
          <Link to={`/product/${item.id}`}>
            <div className="flex justify-between content-between">
              <div>
                <img
                  src={
                    "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"
                  }
                  alt=""
                  width={"400px"}
                  height={"400px"}
                />
              </div>
              <div className="p-4 text-left bg-slate-100">
                <ul className="list-none flex-col">
                  <li className="p-1">{item.title}</li>
                  <li className="p-1">{item.description}</li>
                  <li className="p-1">{item.price}</li>
                  <li className="p-1">{item.discountPercentage}</li>
                  <li className="p-1">{item.brand}</li>
                </ul>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;

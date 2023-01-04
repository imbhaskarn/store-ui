import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../assets/Data";
console.log(Data);
import Product from "./Product";
const Index = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex items-center justify-between">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </Link>
      </div>
      <Product products={Data} />
    </div>
  );
};

export default Index;

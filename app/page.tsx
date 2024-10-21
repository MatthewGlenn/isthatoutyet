import React from "react";
// Database
import { getProductByWeek } from "@/actions/action";
// Views
import ProductView from "./components/product-view";
import WeekView from "./components/week-view";
// import DayView from "./components/day-view";
// Data Structures and Classes
import { ProductViewType } from './components/enums';

export default async function Home() {
  const products = await getProductByWeek();
  // TODO: Remove and ProductView this when we have a working WeekView
  const TestSingleProduct = products[Math.floor(Math.random() * products.length)];
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4">
      <h1 className="text-4xl font-bold text-center text-blue-300 my-4">Is That Out Yet???</h1>
      <h2 className="text-xl font-semibold text-center text-blue-400 my-2">Week View</h2>
      <WeekView products={products} />
      <h1 className="text-2xl font-semibold text-center text-blue-400 my-2">Product Page</h1>
      <ProductView viewType={ProductViewType.ProductPage} product={TestSingleProduct} />
      <h2 className="text-xl font-semibold text-center text-blue-400 my-2">Month View</h2>
    </div>
  );
}
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
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 my-4">Is That Out Yet???</h1>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Product Views</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <ProductView viewType={ProductViewType.Week} product={TestSingleProduct} />
        </div>
      </section>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Week View</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <WeekView products={products} />
        </div>
      </section>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Product Page</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <ProductView viewType={ProductViewType.ProductPage} product={TestSingleProduct} />
        </div>
      </section>
      <hr className="my-4 border-gray-300 dark:border-gray-700" />
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Month View</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          {/* Month View content goes here */}
        </div>
      </section>
    </div>
  );
}
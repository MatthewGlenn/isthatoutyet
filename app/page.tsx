import React from "react";
// Database
import { getProductByWeek } from "@/actions/action";
// Views
import ProductView from "./components/product-view";
import WeekView from "./components/week-view";
import DayView from "./components/day-view";
// Data Structures and Classes
import { ProductViewType } from './components/enums';

export default async function Home() {
  const products = await getProductByWeek();
  // TODO: Remove and ProductView this when we have a working WeekView
  const TestSingleProduct = products[Math.floor(Math.random() * products.length)];
  return (
    <div>
      <h1>Is That Out Yet???</h1>
      <hr />
      <h1>Product Views</h1>
      <ProductView viewType={ProductViewType.Week} product={TestSingleProduct} />
      <hr />
      <h2>Day View</h2>
      <DayView date={new Date()} products={products} viewType={ProductViewType.Day} />
      <hr />
      <h2>Week View</h2>
      <WeekView products={products} />
      <hr />
      <h2>Product Page</h2>
      <ProductView viewType={ProductViewType.ProductPage} product={TestSingleProduct} />
      <hr />
      <h2>Month View</h2>
      <ProductView viewType={ProductViewType.Month} product={TestSingleProduct} />
      <hr />
      <p>Testing</p>
      <h6>{(await getProductByWeek()).map(x=>x.title)}</h6>
    </div>
  );
}

import React from "react";
// Database
import { getProductByWeek } from "@/actions/action"
// Views
import ProductView from "./components/product-view";
import WeekView from "./components/week-view";
// Data Structures and Classes
import { ProductViewType } from './components/enums'

export default async function Home() {
  const products = await getProductByWeek();
  const TESTINGproduct = products[Math.floor(Math.random() * products.length)];
  return (
    <div>
      <h1>Is That Out Yet???</h1>
      <hr />
      <h1>Product Views</h1>
      <p>how many releases - {TESTINGproduct.releases.length}</p>
      <h2>Week View</h2>
      <ProductView viewType={ProductViewType.Week} product={TESTINGproduct} />
      <WeekView startingDay={0} />
      <h2>Product Page</h2>
      <ProductView viewType={ProductViewType.ProductPage} product={TESTINGproduct} />
      <h2>Month View</h2>
      <ProductView viewType={ProductViewType.Month} product={TESTINGproduct} />
      <hr />
      <p>Testing</p>
      <h6>{(await getProductByWeek()).map(x=>x.title)}</h6>
    </div>
  );
}

import React from "react";
import { getProductByWeek } from "@/actions/action"
import ProductView from "./components/product-view";

export default async function Home() {
  return (
    
    <div>
      <h1>Is That Out Yet???</h1>
      <hr />
      <h1>Product View</h1>
      <ProductView />
      <hr />
      <p>Testing</p>
      <h6>{(await getProductByWeek()).map(x=>x.productTitle)}</h6>
    </div>
  );
}

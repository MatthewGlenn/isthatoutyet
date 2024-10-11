 import React from "react";
 import { getProductByWeek } from "@/actions/action"

export default async function Home() {
  return (
    
    <div>
      <h1>Home</h1>
      <h2>Image from public folder</h2>
      <p>Testing</p>
      <h6>{(await getProductByWeek()).map(x=>x.title)}</h6>
    </div>
  );
}

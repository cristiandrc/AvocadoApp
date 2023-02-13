import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/avo");
      const data = response.json;
      console.log(data);
    })();
  });

  return (
    <div>
      <NavBar />
      <h1>Hello world!</h1>
    </div>
  );
};

export default Home;

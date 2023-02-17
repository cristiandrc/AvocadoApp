import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/avo");
      const { data } = await response.json();
      console.log(data);
      setProductList(data);
    })();
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
      {productList.map(({ name, id }) => (
        <div>
          <p>{name}</p>
          <p>{id}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

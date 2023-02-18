import React from "react";
import Layout from "@components/Layout/Layout";
import ProductSummary from "@components/ProductSummary/ProductSummary";
import { GetStaticProps } from "next";

// se requiere pasar todas las paginas posibles
export const getStaticPaths = async () => {
  const response = await fetch("https://platzi-avo.vercel.app/api/avo");
  const { data }: TAPIAvoResponse = await response.json();
  const paths = data.map(({ id }) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    //fallback is for Incremental static generation
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`);
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};
// pagina dinamica
const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;

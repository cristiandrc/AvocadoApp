import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        // as="a" // genera error
        header={name}
        image={<Image src={image} alt={name} width={290} height={333} />}
        // image={image}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group
    itemsPerRow={2}
    stackable
    style={{ justifyContent: "center", gap: "20px" }}
  >
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;

import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const id = (await params).productId;
  return <div>details about product {id}</div>;
};

export default ProductDetails;

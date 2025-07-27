import { getProducts } from "@/prisma/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDB = async () => {
  const products: Product[] = await getProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title} </div>
      ))}
    </div>
  );
};

export default ProductsDB;

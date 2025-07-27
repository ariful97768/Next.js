type users = {
  id: number;
  name: string;
};
type Post = { id: number; title: string };

// Parallel data fetching example in a Server Component
async function ParallelDataFetchingExample() {
  // Start both fetch requests immediately (in parallel)

  const productsPromise = fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

  const categoriesPromise = fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  // Wait for both promises to resolve
  const [products, categories]: [users[], Post[]] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  return (
    <div>
      <h1>Store Data</h1>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParallelDataFetchingExample;

type Author = {
  id: number;
  name: string;
};
const Author = async ({ userId }: { userId: number }) => {
  const author: Author = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  ).json();
  console.log(userId);

  return (
    <div key={author.id}>
      <h1>Written by {author.name}</h1>
    </div>
  );
};

export default Author;

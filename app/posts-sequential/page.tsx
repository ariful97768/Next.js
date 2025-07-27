import React, { Fragment, Suspense } from "react";
import Author from "./author";
import Loading from "./loading";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostSequential = async () => {
  const posts: Post[] = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div>
      <h1>Blogs</h1>
      {filteredPosts.map((post, idx) => (
        <Fragment key={post.id}>
          <div key={post.id}>
            <h3>
              {idx} {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
          <Suspense fallback={<Loading />}>
            <Author key={post.id} userId={post.userId} />
          </Suspense>
        </Fragment>
      ))}
    </div>
  );
};

export default PostSequential;

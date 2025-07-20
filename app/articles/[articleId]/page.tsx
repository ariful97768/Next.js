import Link from "next/link";
import React from "react";

const ArticleDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" | "sp" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
   await new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 2000);
  });
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in language {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=bn`}>Bangla</Link>
        <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
      </div>
    </div>
  );
};

export default ArticleDetails;

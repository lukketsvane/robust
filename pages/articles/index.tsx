import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

const ArticleIndexPage = ({ articles }) => {
  return (
    <div className="space-y-4 max-w-2xl mx-auto p-5">
      {articles.map((article) => (
        <div key={article.slug} className="rounded shadow p-4 hover:bg-gray-100 transition">
          <Link href={`/articles/${article.slug}`}>
            <a className="text-xl font-semibold">{article.title}</a>
          </Link>
          <p className="text-sm">{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch your article data...
  const articles = fetchArticles(); // Replace with actual fetching method

  return { props: { articles } };
};

export default ArticleIndexPage;
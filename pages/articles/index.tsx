// pages/articles/index.tsx
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getSortedArticlesData, ArticleData } from '../../lib/articles'; // Make sure the path is correct

interface ArticlesPageProps {
  articles: ArticleData[];
}

const ArticleIndexPage: React.FC<ArticlesPageProps> = ({ articles }) => {
  if (articles.length === 0) {
    return <div className="max-w-2xl mx-auto p-5">Ingen artikler tilgjengelig.</div>;
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto p-5">
      {articles.map((article) => (
        <Link key={article.title} href={`/articles/${encodeURI(article.title.toLowerCase().replace(/\s+/g, '-'))}`}>
          <div className="block rounded shadow p-4 hover:bg-gray-100 transition">
            <div className="text-xl font-semibold">{article.title}</div>
            <div className="text-sm text-gray-500 mt-2 hover:underline">{article.date} av {article.author}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getSortedArticlesData();

  return { props: { articles } };
};

export default ArticleIndexPage;
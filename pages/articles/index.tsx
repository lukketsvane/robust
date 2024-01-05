import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { getSortedArticlesData, ArticleData as ArticleDataType } from '../../lib/articles'; // Rename the imported type
import { List, Grid } from 'lucide-react'; // Import Lucide icons

interface ArticlesPageProps {
  articles: ArticleDataType[]; // Use the renamed type here
}

interface ArticleData {
  title: string;
  date: string;
  author: string;
  summary: string;
  image?: string; // Add the 'image' property as an optional field
}

const ArticleIndexPage: React.FC<ArticlesPageProps> = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // Default to grid view

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
      {filteredArticles.map((article) => (
        <Link key={article.title} href={`/articles/${encodeURI(article.title.toLowerCase().replace(/\s+/g, '-'))}`}>
          <div className="block rounded-lg shadow-lg overflow-hidden hover:bg-gray-100 transition">
            <Image
              src={article.image || '/default-image.png'}
              alt={article.title}
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-4">
              <div className="text-xl font-semibold mb-2">{article.title}</div>
              <div className="text-sm text-gray-500 mb-2">{article.date} av {article.author}</div>
              <p className="text-gray-600">{article.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4 max-w-2xl mx-auto p-5 pt-16">
      {filteredArticles.map((article) => (
        <Link key={article.title} href={`/articles/${encodeURI(article.title.toLowerCase().replace(/\s+/g, '-'))}`}>
          <div className="block rounded shadow p-4 hover:bg-gray-100 transition">
            <div className="text-xl font-semibold">{article.title}</div>
            <div className="text-sm text-gray-500 mt-2 hover:underline">{article.date} av {article.author}</div>
            <p className="text-gray-600 mt-2">{article.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="space-y-4 max-w-2xl mx-auto p-5 pt-16">
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Søk i artikler..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-2/3"
        />
        <button
          onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          className="p-2 border border-black rounded ml-2 md:ml-4 flex items-center"
        >
          {viewMode === 'grid' ? <List size={20} color="black" /> : <Grid size={20} color="black" />}
        </button>
      </div>
      {viewMode === 'grid' ? renderGridView() : renderListView()}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getSortedArticlesData();
  return { props: { articles } };
};

export default ArticleIndexPage;

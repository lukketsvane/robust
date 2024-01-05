import React from 'react';
import Image from 'next/image';

interface ArticleTemplateProps {
  children: React.ReactNode;
  frontMatter: {
    title: string;
    date: string;
    image: string;
    author: string;
    tags: string[];
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ children, frontMatter }) => {
  return (
    <article className="max-w-2xl mx-auto p-5 pt-16"> {/* Increased padding at the top */}
      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{frontMatter.date} By: {frontMatter.author}</p>
      <Image
        src={frontMatter.image}
        alt={frontMatter.title}
        width={600}
        height={400}
        layout="responsive"
        className="rounded"
      />
      <div className="mt-6 prose">{children}</div>
      <div className="flex flex-wrap gap-2 mt-4">
        {frontMatter.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ArticleTemplate;

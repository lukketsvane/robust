import ArticleTemplate from '../../app/components/ArticleTemplate';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { getSortedArticlesData } from '../../lib/articles';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm'; // To support GitHub Flavored Markdown

const articlesDirectory = path.join(process.cwd(), 'articles');

// Define the structure of the article data
interface ArticleData {
  title: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
  content?: string;
}

interface ArticleProps {
  articleData: ArticleData;
  mdxSource: any; // Change to any to avoid typing issues
}

const Article: React.FC<ArticleProps> = ({ articleData, mdxSource }) => {
  return (
    <ArticleTemplate frontMatter={articleData}>
      <MDXRemote {...mdxSource} components={{
        h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
        h2: (props) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
        // ... other components
      }} />
    </ArticleTemplate>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allArticles = getSortedArticlesData();
  const formattedTitle = params?.title || '';
  const fullPath = path.join(articlesDirectory, `${formattedTitle}.mdx`);
  
  let mdxSource: any; // Change to any to avoid typing issues
  let articleData: ArticleData | null = null;

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);
    articleData = data as ArticleData;
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm], // Use remarkGfm for GitHub Flavored Markdown
      },
    });
  } catch (error) {
    console.error('Error reading MDX file:', error);
    mdxSource = await serialize('<p>Article not found.</p>');
  }

  return {
    props: {
      articleData: articleData,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getSortedArticlesData();

  const paths = articles.map((article) => ({
    params: { title: article.title.replace(/\s+/g, '-').toLowerCase() },
  }));

  return { paths, fallback: false };
};

export default Article;

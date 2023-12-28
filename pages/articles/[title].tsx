import ArticleTemplate from '../../app/components/ArticleTemplate';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { getSortedArticlesData } from '../../lib/articles';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

const articlesDirectory = path.join(process.cwd(), 'articles');

// Define the structure of the article data
interface ArticleData {
  title: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
  content?: string; // Optional, for the article content
}

interface ArticleProps {
  articleData: ArticleData;
  mdxSource: MDXRemoteSerializeResult;
}

const Article: React.FC<ArticleProps> = ({ articleData, mdxSource }) => {
  return (
    <ArticleTemplate frontMatter={articleData}>
      <MDXRemote {...mdxSource} />
    </ArticleTemplate>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allArticles = getSortedArticlesData();
  const formattedTitle = params?.title || '';
  const fullPath = path.join(articlesDirectory, `${formattedTitle}.mdx`);
  
  let mdxSource: MDXRemoteSerializeResult;
  let articleData: ArticleData | null = null;

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);
    articleData = data as ArticleData;
    articleData.content = content; // Optional, if you want to store the content in the articleData
    mdxSource = await serialize(content);
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

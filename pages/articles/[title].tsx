import ArticleTemplate from '../../app/components/ArticleTemplate';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { getSortedArticlesData, ArticleData as BaseArticleData } from '../../lib/articles';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'; // Updated import

const articlesDirectory = path.join(process.cwd(), 'articles');

// Extending ArticleData to match the expected structure for ArticleTemplate
interface ArticleData extends BaseArticleData {
  image: string;
  // ... other properties
}

interface ArticleProps {
  articleData: ArticleData;
  mdxSource: MDXRemoteSerializeResult; // Updated type
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
  const articleData = allArticles.find(
    (data) => data.title.replace(/\s+/g, '-').toLowerCase() === formattedTitle
  ) as ArticleData | null; 

  let mdxSource: MDXRemoteSerializeResult;

  if (articleData) {
    const fullPath = path.join(articlesDirectory, `${formattedTitle}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);

    mdxSource = await serialize(content); // Serialize returns MDXRemoteSerializeResult
  } else {
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

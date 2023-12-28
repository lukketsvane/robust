import ArticleTemplate from '../../app/components/ArticleTemplate';
import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { getSortedArticlesData, ArticleData } from '../../lib/articles';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const articlesDirectory = path.join(process.cwd(), 'articles');

interface ArticleProps {
  articleData: ArticleData;
  mdxSource: { compiledSource: string };
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
  const articleData =
    allArticles.find(
      (data) => data.title.replace(/\s+/g, '-').toLowerCase() === formattedTitle
    ) || null;

  let mdxSource;

  if (articleData) {
    const fullPath = path.join(articlesDirectory, `${formattedTitle}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);

    // Serialize the MDX content
    mdxSource = await serialize(content);
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

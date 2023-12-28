// pages/articles/[title].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import ArticleTemplate from '../../app/components/ArticleTemplate';
import { getSortedArticlesData, ArticleData } from '../../lib/articles';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// Optionally import any additional components used within your MDX here

// Assuming articles are stored in /articles directory at the root of the project
const articlesDirectory = path.join(process.cwd(), 'articles');

interface ArticleProps {
  articleData: ArticleData;
  mdxSource: MDXRemoteSerializeResult;
}

const Article: React.FC<ArticleProps> = ({ articleData, mdxSource }) => {
  // Optionally include any other components that are used in the MDX content
  const mdxComponents = {}; 

  return (
    <ArticleTemplate frontMatter={articleData}>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </ArticleTemplate>
  );
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
  // Fetch the title from the file name in params
  const title = params?.title as string;

  // Find the article data using the title
  const allArticles = getSortedArticlesData();
  const articleData = allArticles.find((data) => data.title.replace(/\s+/g, '-').toLowerCase() === title) || null;

  if (articleData === null) {
    return { notFound: true };
  }

  // Construct the full path to the MDX file for the article
  const fullPath = path.join(articlesDirectory, `${articleData.title.replace(/\s+/g, '-')}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  
  // Serialize the MDX content
  const mdxSource = await serialize(content);

  return {
    props: {
      articleData,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Use the getSortedArticlesData function to get the list of article titles
  const articles = getSortedArticlesData();

  // Map over the list of articles to create an array of paths
  const paths = articles.map((article) => ({
    params: { title: article.title.replace(/\s+/g, '-').toLowerCase() },
  }));

  return {
    paths,
    fallback: false, // Can be set to 'blocking' or 'true' for dynamic generation
  };
};

export default Article;
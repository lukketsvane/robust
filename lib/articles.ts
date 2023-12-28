import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');

export interface ArticleData {
  title: string;
  date: string;
  author: string;
  tags: string[];
}

export const getSortedArticlesData = (): ArticleData[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map(fileName => {
    const title = fileName.replace(/\.mdx?$/, '').replace(/-/g, ' ');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title,
      ...(matterResult.data as Omit<ArticleData, 'title'>)
    };
  }).sort((a, b) => a.date < b.date ? 1 : -1);
};

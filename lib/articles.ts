import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');

export interface ArticleData {
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string; // New field for summary
}

export const getSortedArticlesData = (): ArticleData[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map(fileName => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Extracting summary from the front matter
    const summary = matterResult.data.summary || 'No summary available';

    return {
      title: fileName.replace(/\.mdx?$/, '').replace(/-/g, ' '),
      date: matterResult.data.date,
      author: matterResult.data.author,
      tags: matterResult.data.tags,
      summary, // Adding summary to the returned object
    };
  }).sort((a, b) => a.date < b.date ? 1 : -1);
};

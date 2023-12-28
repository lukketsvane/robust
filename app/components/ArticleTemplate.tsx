import React from 'react';
import Image from 'next/image';
import styles from './ArticleTemplate.module.css'; // Assume you have a CSS module for custom styles

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
    <article className={styles.article}>
      <h1 className={styles.title}>{frontMatter.title}</h1>
      <div className={styles.meta}>
        <span className={styles.date}>{frontMatter.date}</span>
        <span className={styles.author}>By: {frontMatter.author}</span>
      </div>
      <Image
        src={frontMatter.image}
        alt={frontMatter.title}
        width={600}
        height={400}
        layout="responsive"
        className={styles.image}
      />
      <div className={styles.content}>{children}</div>
      <div className={styles.tags}>
        {frontMatter.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ArticleTemplate;

// tools/generateSearchIndex.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
const outputPath = path.join(process.cwd(), 'public', 'search-index.json');

function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap(entry => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getAllMarkdownFiles(res) : res;
  });
  return files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
}

function generateSearchIndex() {
  const files = getAllMarkdownFiles(blogDir);
  const index = files.map(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    const slug = path
      .relative(blogDir, file)
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '');
    return {
      title: data.title || '',
      description: data.description || '',
      tags: data.tags || [],
      slug,
    };
  });
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  console.log(`✅ Search index generated at ${outputPath}`);
}

generateSearchIndex();

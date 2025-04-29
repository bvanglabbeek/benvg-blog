import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Path to your blog content directory
// Path to your blog content directory (ESM compatible)
const blogDir = path.join(path.dirname(new URL(import.meta.url).pathname), '../src/content/blog');
let blogSlugs: string[] = [];
let count = 0;

if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    blogSlugs = blogFiles.map(f => f.replace(/\.md$/, '').replace(/\.mdx$/, ''));

}

test.describe('All Blog Posts', () => {
    if (blogSlugs.length === 0) {
        test('should have at least one blog post', () => {
            throw new Error('No blog posts found or blog directory missing: ' + blogDir);
        });
    } else {
        for (const slug of blogSlugs) {
            test(`blog post "/blog/${slug}" renders`, async ({ page }) => {
                await page.goto(`/blog/${slug}`);
                await expect(page.locator('article.blog-post')).toBeVisible();
                await expect(page.locator('.blog-content')).toBeVisible();
            });
            count++;
        }

        test('Check if all blog posts are present', () => {
            if(count !== blogSlugs.length) {
            throw new Error('Some of the blog posts are missing: ' + count + ' of ' + blogSlugs.length);
            }else{
                expect(true).toBeTruthy();  
            }
        });
    }
});
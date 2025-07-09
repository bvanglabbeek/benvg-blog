import { describe, it, expect, vi } from 'vitest';
import { z } from 'zod';

// Mock the defineCollection function to return a schema
vi.mock('astro:content', () => ({
  defineCollection: vi.fn().mockImplementation((config) => config),
  z: z,
}));

import { collections } from '../../src/content/config';

describe('Content Collections', () => {
  describe('Blog collection schema', () => {
    const blogSchema = collections.blog.schema;

    it('should validate a valid blog post', () => {
      const validPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['test', 'blog'],
        image: '/images/test.jpg',
      };

      const result = blogSchema.safeParse(validPost);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validPost);
      }
    });

    it('should validate a blog post without optional image', () => {
      const validPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(validPost);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validPost);
      }
    });

    it('should coerce string dates to Date objects', () => {
      const postWithStringDate = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: '2024-01-01',
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(postWithStringDate);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.pubDate).toBeInstanceOf(Date);
        expect(result.data.pubDate).toEqual(new Date('2024-01-01'));
      }
    });

    it('should require title field', () => {
      const invalidPost = {
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_type',
              path: ['title'],
              message: 'Required',
            }),
          ])
        );
      }
    });

    it('should require description field', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_type',
              path: ['description'],
              message: 'Required',
            }),
          ])
        );
      }
    });

    it('should require pubDate field', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_date',
              path: ['pubDate'],
              message: 'Invalid date',
            }),
          ])
        );
      }
    });

    it('should require author field', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_type',
              path: ['author'],
              message: 'Required',
            }),
          ])
        );
      }
    });

    it('should require tags field', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_type',
              path: ['tags'],
              message: 'Required',
            }),
          ])
        );
      }
    });

    it('should validate tags as array of strings', () => {
      const validPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['tag1', 'tag2', 'tag3'],
      };

      const result = blogSchema.safeParse(validPost);
      expect(result.success).toBe(true);
    });

    it('should reject invalid tags array', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['valid-tag', 123, 'another-valid-tag'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_type',
              path: ['tags', 1],
              message: 'Expected string, received number',
            }),
          ])
        );
      }
    });

    it('should reject invalid date format', () => {
      const invalidPost = {
        title: 'Test Blog Post',
        description: 'This is a test blog post description.',
        pubDate: 'invalid-date',
        author: 'Test Author',
        tags: ['test', 'blog'],
      };

      const result = blogSchema.safeParse(invalidPost);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              code: 'invalid_date',
              path: ['pubDate'],
            }),
          ])
        );
      }
    });
  });

  describe('Collections export', () => {
    it('should export blog collection', () => {
      expect(collections).toHaveProperty('blog');
      expect(collections.blog).toBeDefined();
    });

    it('should have correct collection structure', () => {
      expect(collections.blog).toHaveProperty('schema');
      expect(collections.blog.schema).toBeInstanceOf(z.ZodObject);
    });
  });
});
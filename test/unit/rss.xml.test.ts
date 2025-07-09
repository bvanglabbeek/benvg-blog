import { describe, it, expect, vi } from 'vitest';
import { GET } from '../../src/pages/rss.xml.js';
import { mockBlogPosts, mockContext } from '../../src/test/mocks';

vi.mock('@astrojs/rss', () => ({
  default: vi.fn().mockImplementation((config) => ({
    type: 'rss',
    title: config.title,
    description: config.description,
    site: config.site,
    items: config.items,
  })),
}));

vi.mock('astro:content', () => ({
  getCollection: vi.fn(),
}));

describe('RSS Feed', () => {
  it('should generate RSS feed with correct structure', async () => {
    const { getCollection } = await import('astro:content');
    vi.mocked(getCollection).mockResolvedValue(mockBlogPosts);

    const result = await GET(mockContext);

    expect(result).toEqual({
      type: 'rss',
      title: 'Ben van Glabbeek',
      description: 'Personal blog and portfolio of Ben van Glabbeek - Transformation, Software Engineering, adventurer, and lifelong learner.',
      site: 'https://benvglabbeek.com',
      items: [
        {
          title: 'Test Blog Post',
          description: 'This is a test blog post description.',
          pubDate: new Date('2024-01-01'),
          author: 'Test Author',
          tags: ['test', 'blog', 'unit-testing'],
          image: '/images/test-post.jpg',
          link: '/blog/test-post/',
        },
        {
          title: 'Another Test Post',
          description: 'Another test blog post description.',
          pubDate: new Date('2024-01-02'),
          author: 'Another Author',
          tags: ['test', 'example'],
          link: '/blog/another-post/',
        },
      ],
    });
  });

  it('should call getCollection with "blog" parameter', async () => {
    const { getCollection } = await import('astro:content');
    vi.mocked(getCollection).mockResolvedValue(mockBlogPosts);

    await GET(mockContext);

    expect(getCollection).toHaveBeenCalledWith('blog');
  });

  it('should handle empty blog posts collection', async () => {
    const { getCollection } = await import('astro:content');
    vi.mocked(getCollection).mockResolvedValue([]);

    const result = await GET(mockContext);

    expect(result).toEqual({
      type: 'rss',
      title: 'Ben van Glabbeek',
      description: 'Personal blog and portfolio of Ben van Glabbeek - Transformation, Software Engineering, adventurer, and lifelong learner.',
      site: 'https://benvglabbeek.com',
      items: [],
    });
  });

  it('should generate correct blog post links', async () => {
    const { getCollection } = await import('astro:content');
    const singlePost = [mockBlogPosts[0]];
    vi.mocked(getCollection).mockResolvedValue(singlePost);

    const result = await GET(mockContext);

    expect(result.items[0].link).toBe('/blog/test-post/');
  });

  it('should use context.site for RSS feed site', async () => {
    const { getCollection } = await import('astro:content');
    vi.mocked(getCollection).mockResolvedValue([]);

    const customContext = { site: 'https://example.com' };
    const result = await GET(customContext);

    expect(result.site).toBe('https://example.com');
  });

  it('should spread post data correctly', async () => {
    const { getCollection } = await import('astro:content');
    const testPost = {
      id: 'test-post-with-extra-data',
      slug: 'test-post-with-extra-data',
      data: {
        title: 'Test Post with Extra Data',
        description: 'Test description',
        pubDate: new Date('2024-01-01'),
        author: 'Test Author',
        tags: ['test'],
        customField: 'custom-value',
      },
    };
    vi.mocked(getCollection).mockResolvedValue([testPost]);

    const result = await GET(mockContext);

    expect(result.items[0]).toEqual({
      title: 'Test Post with Extra Data',
      description: 'Test description',
      pubDate: new Date('2024-01-01'),
      author: 'Test Author',
      tags: ['test'],
      customField: 'custom-value',
      link: '/blog/test-post-with-extra-data/',
    });
  });
});
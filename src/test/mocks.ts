export const mockBlogPost = {
  id: 'test-post',
  slug: 'test-post',
  body: 'This is a test post content.',
  collection: 'blog',
  data: {
    title: 'Test Blog Post',
    description: 'This is a test blog post description.',
    pubDate: new Date('2024-01-01'),
    author: 'Test Author',
    tags: ['test', 'blog', 'unit-testing'],
    image: '/images/test-post.jpg',
  },
};

export const mockBlogPosts = [
  mockBlogPost,
  {
    id: 'another-post',
    slug: 'another-post',
    body: 'Another test post content.',
    collection: 'blog',
    data: {
      title: 'Another Test Post',
      description: 'Another test blog post description.',
      pubDate: new Date('2024-01-02'),
      author: 'Another Author',
      tags: ['test', 'example'],
    },
  },
];

export const mockContext = {
  site: 'https://benvglabbeek.com',
};
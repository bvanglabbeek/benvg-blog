import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: ['tests/**/*', 'node_modules/**/*'],
  },
  resolve: {
    alias: {
      'astro:content': new URL('./src/test/astro-content-mock.ts', import.meta.url).pathname,
    },
  },
});
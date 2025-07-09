import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: false,
    include: ['test/**/*.{test,spec}.{js,ts}'],
    exclude: ['tests/**/*', 'node_modules/**/*', 'dist/**/*'],
    isolate: true,
  },
  resolve: {
    alias: {
      'astro:content': new URL('./src/test/astro-content-mock.ts', import.meta.url).pathname,
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
});
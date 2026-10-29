import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nikhil-pawar0609.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  // GitHub Pages can't send headers, so the policy ships as a <meta> tag with hashes for
  // every script and style Astro emits.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action mailto:",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
});

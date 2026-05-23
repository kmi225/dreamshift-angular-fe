import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic slugs and runtime API data — client-rendered; SPA fallback via _redirects
  {
    path: 'blog-post/:slug',
    renderMode: RenderMode.Client,
  },
  // Handsontable requires browser-only APIs
  {
    path: 'aussie-toolkit/connection-bank',
    renderMode: RenderMode.Client,
  },
  // Blog list fetches from external API at runtime
  {
    path: 'blog',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

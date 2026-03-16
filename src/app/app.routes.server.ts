import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Blog post pages have dynamic :slug — render on-demand (slugs come from API)
  {
    path: 'blog-post/:slug',
    renderMode: RenderMode.Server
  },
  // Connection bank uses Handsontable (browser-only APIs); skip prerender
  {
    path: 'aussie-toolkit/connection-bank',
    renderMode: RenderMode.Server
  },
  // Blog list fetches from external API at runtime; server-render on request
  {
    path: 'blog',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

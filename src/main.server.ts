import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Server-side bootstrap entry point.
 *
 * Angular's SSR runtime passes a BootstrapContext-like object here.
 * We forward that context to `bootstrapApplication` to ensure a
 * proper platform is created on the server and to avoid NG0401.
 */
const bootstrap = (context: any) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;

/// <reference types="@angular/localize" />

import { registerAllModules } from 'handsontable/registry';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

registerAllModules();

try {
  if (typeof window !== 'undefined') {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }
} catch {
  /* noop */
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

/// <reference types="@angular/localize" />

import { registerAllModules } from 'handsontable/registry';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

registerAllModules();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

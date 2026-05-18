import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { RouteMetaService } from './services/route-meta.service';

const APP_TITLE = 'DreamShift';

/**
 * Sets the document title and meta tags from the active route's `title` and `data.meta`.
 * Routes without a title keep the default from index.html.
 */
@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly routeMeta = inject(RouteMetaService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(`${title} | ${APP_TITLE}`);
    } else {
      this.title.setTitle(APP_TITLE);
    }
    this.routeMeta.updateFromSnapshot(snapshot);
  }
}

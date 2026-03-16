import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

const APP_TITLE = 'DreamShift';

/**
 * Sets the document title from the active route's `title` property, with " | DreamShift" suffix.
 * Routes without a title keep the default from index.html.
 */
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(`${title} | ${APP_TITLE}`);
    } else {
      this.title.setTitle(APP_TITLE);
    }
  }
}

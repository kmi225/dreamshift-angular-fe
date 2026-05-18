import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterStateSnapshot } from '@angular/router';
import { RouteMeta } from '../models/route-meta.model';
import { getRouteMetaFromSnapshot } from '../utils/route-meta.util';

const DEFAULT_META: RouteMeta = {
  description:
    "Land Australian Job Interviews within 60 days with DreamShift's Premium Resume, CV writing services.",
  focusKeyword: ['dreamshift', 'australian jobs', 'australian', 'australia', 'CV australia'],
};

@Injectable({ providedIn: 'root' })
export class RouteMetaService {
  private readonly meta = inject(Meta);

  updateFromSnapshot(snapshot: RouterStateSnapshot): void {
    const routeMeta = getRouteMetaFromSnapshot(snapshot) ?? DEFAULT_META;
    this.apply(routeMeta);
  }

  private apply({ description, focusKeyword }: RouteMeta): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: focusKeyword.join(', ') });
  }
}

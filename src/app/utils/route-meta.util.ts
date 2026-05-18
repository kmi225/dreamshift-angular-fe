import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouteMeta } from '../models/route-meta.model';

/** Resolves `data.meta` from the deepest active route, walking up if needed. */
export function getRouteMetaFromSnapshot(
  snapshot: RouterStateSnapshot
): RouteMeta | undefined {
  let route: ActivatedRouteSnapshot | null = snapshot.root;
  while (route.firstChild) {
    route = route.firstChild;
  }

  while (route) {
    const meta = route.data['meta'] as RouteMeta | undefined;
    if (meta?.description) {
      return meta;
    }
    route = route.parent;
  }

  return undefined;
}

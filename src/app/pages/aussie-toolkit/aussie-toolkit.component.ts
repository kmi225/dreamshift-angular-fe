import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthBannerComponent } from '../../components/full-width-banner/full-width-banner.component';
import { ROUTES } from '../../constants/routes.constants';
import { Router } from '@angular/router';
import { AussieResource } from '../../models/aussie-resources.model';
import { ADDITIONAL_EXTERNAL_RESOURCES, LAND_JOBS_FASTER_RESOURCES, PRIMARY_AUSSIE_RESOURCES } from '../../constants/aussie-resources.constants';

@Component({
  selector: 'app-aussie-toolkit',
  imports: [
    CommonModule,
    FullWidthBannerComponent
  ],
  templateUrl: './aussie-toolkit.component.html',
  styleUrl: './aussie-toolkit.component.scss'
})
export class AussieToolkitComponent {
  private readonly router = inject(Router);

  public primaryAussieResources: AussieResource[] = PRIMARY_AUSSIE_RESOURCES;
  public landJobsFasterResources: AussieResource[] = LAND_JOBS_FASTER_RESOURCES;
  public additionalExternalResources: AussieResource[] = ADDITIONAL_EXTERNAL_RESOURCES;

  public navigateToResource(link: string) {
    if (link.startsWith("https://")) {
      //treat as external link
      window.open(link, '_blank');
    } else {
      //treat as internal link
      window.scrollTo(0, 0);
      this.router.navigate([ROUTES.AUSSIE_TOOLKIT, link]);
    }
  }
}

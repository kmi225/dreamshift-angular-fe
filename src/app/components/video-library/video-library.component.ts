import { Component, inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VIDEO_CATEGORIES, VideoCategories, VideoTestimonial } from '../../models/video-testimonial.model';
import { DsDropdownComponent } from '../ds-dropdown/ds-dropdown.component';

@Component({
  selector: 'app-video-library',
  imports: [
    DsDropdownComponent
  ],
  templateUrl: './video-library.component.html',
  styleUrl: './video-library.component.scss'
})
export class VideoLibraryComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener: (() => void) | null = null;
  private readonly sanitizer = inject(DomSanitizer);

  readonly videoList: VideoTestimonial[] = [
    {
      id: 1,
      title: 'Yasiru&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120342108?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      category: VIDEO_CATEGORIES.TESTIMONIAL
    },
    {
      id: 2,
      title: 'Shavindri&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1177949641?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      category: VIDEO_CATEGORIES.CAREER_SEARCH
    },
    {
      id: 3,
      title: 'Yasiru&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120342108?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      category: VIDEO_CATEGORIES.CAREER_SEARCH
    },
    {
      id: 4,
      title: 'Shavindri&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1177949641?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      category: VIDEO_CATEGORIES.CAREER_SEARCH
    },
    {
      id: 5,
      title: 'Vishnu&#039;s Success Story',
      videoURL: 'https://player.vimeo.com/video/1120342284?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      category: VIDEO_CATEGORIES.TESTIMONIAL
    }
  ]

  public currentVideo: VideoTestimonial = this.videoList[0];
  public currentCategory: VideoCategories = VIDEO_CATEGORIES.TESTIMONIAL;
  public allCategories: string[] = Object.values(VIDEO_CATEGORIES);

  get allCategoriesList() {
    return Object.keys(VIDEO_CATEGORIES).map((category, index) => {
      return {
        key: category as VideoCategories,
        label: VIDEO_CATEGORIES[category as keyof typeof VIDEO_CATEGORIES],
        index: index  
      }
    });
  }

  /** Cached sanitized URLs so we return the same reference every time and avoid iframe reload flicker. */
  private sanitizedVideoUrls: Map<number, SafeResourceUrl> | null = null;

  getSanitizedVideoURL(video: VideoTestimonial): SafeResourceUrl {
    if (!this.sanitizedVideoUrls) {
      this.sanitizedVideoUrls = new Map();
      this.videoList.forEach((t) =>
        this.sanitizedVideoUrls!.set(t.id, this.sanitizer.bypassSecurityTrustResourceUrl(t.videoURL))
      );
    }
    return this.sanitizedVideoUrls.get(video.id)!;
  }

  setVideoAsCurrent(testimonial: VideoTestimonial) {
    this.currentVideo = testimonial;
  }

  get categorizedVideoList() {
    return this.videoList.filter(video => video.category === this.currentCategory);
  }

  public changeCategory(category: VideoCategories) {
    this.currentCategory = category;
  }

  public getSelectedCategorySet(): Set<string> {
    return new Set([this.currentCategory]);
  }

  public changeVideoCategory(selected: Set<string>) {
    const [nextCategory] = [...selected];
    if (nextCategory && this.allCategories.includes(nextCategory)) {
      this.currentCategory = nextCategory as VideoCategories;
    }
  }
}

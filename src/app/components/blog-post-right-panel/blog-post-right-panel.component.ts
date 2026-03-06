import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-blog-post-right-panel',
  imports: [],
  templateUrl: './blog-post-right-panel.component.html',
  styleUrl: './blog-post-right-panel.component.scss'
})
export class BlogPostRightPanelComponent {
  readonly cdnUrl = CDN_URL;
}

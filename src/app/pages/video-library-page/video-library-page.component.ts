import { Component } from '@angular/core';
import { VideoLibraryComponent } from '../../components/video-library/video-library.component';

@Component({
  selector: 'app-video-library-page',
  imports: [
    VideoLibraryComponent
  ],
  templateUrl: './video-library-page.component.html',
  styleUrl: './video-library-page.component.scss'
})
export class VideoLibraryPageComponent {

}

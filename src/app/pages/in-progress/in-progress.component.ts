import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';

@Component({
  selector: 'app-in-progress',
  imports: [],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.scss'
})
export class InProgressComponent {
  readonly cdnUrl = CDN_URL;
}

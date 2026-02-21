import { Component } from '@angular/core';
import { CDN_URL } from '../../constants/cdn.constants';
import { CompaniesListItem } from '../../models/companies-list-item.model';

@Component({
  selector: 'app-rotating-images-array',
  imports: [],
  templateUrl: './rotating-images-array.component.html',
  styleUrl: './rotating-images-array.component.scss'
})
export class RotatingImagesArrayComponent {
  readonly companiesList: CompaniesListItem[] = [
    { label: 'ansell', imageURL: CDN_URL + '2024/02/Ansell-logo-monochrome-white.svg' },
    { label: 'deloitte', imageURL: CDN_URL + '2024/02/Deloitte-logo-monochrome-white.svg' },
    { label: 'kiwi bank', imageURL: CDN_URL + '2024/02/Kiwi-bank-monochrome-white.svg' },
    { label: 'pwc', imageURL: CDN_URL + '2024/02/PWC-white-monochrome-white.svg' },
    { label: 'emirates', imageURL: CDN_URL + '2024/02/Emirates-monochrome-white.svg' },
    { label: 'qatar airways', imageURL: CDN_URL + '2024/02/Qatar-airways-monochrome-white.svg' },
    { label: 'kpmg', imageURL: CDN_URL + '2024/02/KPMG-monochrome-white-3.svg' }
  ];
}

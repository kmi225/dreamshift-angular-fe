import { Component } from '@angular/core';

interface CompaniesListItem {
  label: string;
  imageURL: string;
}

@Component({
  selector: 'app-rotating-images-array',
  imports: [],
  templateUrl: './rotating-images-array.component.html',
  styleUrl: './rotating-images-array.component.scss'
})
export class RotatingImagesArrayComponent {
  readonly companiesList: CompaniesListItem[] = [
    { label: 'ansell', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/Ansell-logo-monochrome-white.svg' },
    { label: 'deloitte', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/Deloitte-logo-monochrome-white.svg' },
    { label: 'kiwi bank', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/Kiwi-bank-monochrome-white.svg' },
    { label: 'pwc', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/PWC-white-monochrome-white.svg' },
    { label: 'emirates', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/Emirates-monochrome-white.svg' },
    { label: 'qatar airways', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/Qatar-airways-monochrome-white.svg' },
    { label: 'kpmg', imageURL: 'https://dreamshift.net/wp-content/uploads/2024/02/KPMG-monochrome-white-3.svg' }
  ];
}

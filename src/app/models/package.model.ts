export interface Package {
  id: number;
  title: string;
  ideal: string;
  price: string;
  currency: string;
  bestSeller: boolean;
  packageInclusions: string[];
  packageExclusions: string[];
}

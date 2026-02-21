export interface Package {
  id: number;
  title: string;
  ideal: string;
  price: string;
  currency: string;
  bestSeller: boolean;
  packageInclusions: PackageInclusion[];
  packageExclusions: PackageInclusion[];
}

export interface PackageInclusion {
  id: number;
  description: string;
}
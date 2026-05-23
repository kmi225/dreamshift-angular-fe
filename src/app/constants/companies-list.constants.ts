import { CompaniesListItem } from "../models/companies-list-item.model";
import { BASE_HREF } from "./deployment.constants";

export const COMPANIES_LIST: CompaniesListItem[] = [
    { label: 'ansell', imageURL: BASE_HREF + 'images/home-page/companies/Ansell-logo-monochrome-white.svg' },
    { label: 'deloitte', imageURL: BASE_HREF + 'images/home-page/companies/Deloitte-logo-monochrome-white.svg' },
    { label: 'kiwi bank', imageURL: BASE_HREF + 'images/home-page/companies/Kiwi-bank-monochrome-white.svg' },
    { label: 'pwc', imageURL: BASE_HREF + 'images/home-page/companies/PWC-white-monochrome-white.svg' },
    { label: 'emirates', imageURL: BASE_HREF + 'images/home-page/companies/Emirates-monochrome-white.svg' },
    { label: 'qatar airways', imageURL: BASE_HREF + 'images/home-page/companies/Qatar-airways-monochrome-white.svg' },
    { label: 'kpmg', imageURL: BASE_HREF + 'images/home-page/companies/KPMG-monochrome-white-3.svg' }
];
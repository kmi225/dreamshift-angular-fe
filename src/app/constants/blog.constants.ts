import { BlogCategory } from "../pages/blog/blog.component";

export const CATEGORIES_LIST: BlogCategory[] = [ {
    id: 1,
    name: 'All',
    searchCategory: 'all',
    visible: true
  }, {
    id: 2,
    name: 'Career Guidance',
    searchCategory: 'category-career-guidance',
    visible: true
  }, {
    id: 3,
    name: 'DreamShift stories',
    searchCategory: 'category-dreamshift-stories',
    visible: true
  }, {
    id: 4,
    name: 'Editor\'s picks',
    searchCategory: 'category-4',  //TODO: add the correct category
    visible: true
  }, {
    id: 5,
    name: 'Job Market Research',
    searchCategory: 'category-job-market-research',
    visible: true
  }, {
    id: 6,
    name: 'Resources',
    searchCategory: 'category-6',
    visible: true
  }, {
    id: 7,
    name: 'Resume and CV Writing',
    searchCategory: 'category-resume-cv-writing',
    visible: true
  }, {
    id: 9,
    name: 'Sri Lankan Job Market',
    searchCategory: 'category-sri-lankan-job-market',
    visible: false
  }, {
    id: 10,
    name: 'Australian Job Market',
    searchCategory: 'category-australian-job-market',
    visible: false
  }, {
    id: 11,
    name: 'LinkedIn',
    searchCategory: 'category-linkedin',
    visible: false
  }, {
    id: 12,
    name: 'Applicant Tracking Systems',
    searchCategory: 'category-ats',
    visible: false
  }, {
    //Uncategorized must be at the bottom of the list,
    //so that it is the worst case option when identifying the post category
    id: 8,
    name: 'Uncategorized',   
    searchCategory: 'category-uncategorized',
    visible: false
  }
];
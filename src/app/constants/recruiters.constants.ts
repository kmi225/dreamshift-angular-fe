import { FilterableCard } from '../models/filterable-card.model';
import { FilterConfig } from '../models/filter-config.model';

const STATE_OPTIONS = {
  ACT: 'ACT',
  NSW: 'NSW',
  NT: 'NT',
  NZ: 'NZ',
  National: 'National',
  QLD: 'QLD',
  SA: 'SA',
  VIC: 'VIC',
  WA: 'WA',
} as const;

/** Default data for recruiters page */
export const DEFAULT_RECRUITERS_CARDS: FilterableCard[] =
[
  {
    "name": "Active Recruitment",
    "description": "Experienced recruitment professionals serving sydney companies with responsive service and quality placements.",
    "metaTags": [
      "NSW"
    ],
    "link": "https://www.activerecruitment.com.au/",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Admin",
        "Sales",
        "HR"
      ]
    },
    "branches": [
      "Parramatta"
    ]
  },
  {
    "name": "Adecco Australia",
    "description": "World's leading recruitment agency specializing in workforce solutions, government, and defence recruiting.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.adecco.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Admin & Office",
        "Banking",
        "Finance",
        "Construction",
        "Defense",
        "Education",
        "Government",
        "Healthcare",
        "IT",
        "Manufacturing",
        "Mining",
        "Retail",
        "Sales",
        "Transport"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Canberra",
      "Newcastle"
    ]
  },
  {
    "name": "Chandler Macleod",
    "description": "One of australia's largest agencies using bestfit™ methodology, dominant in government and mining sectors.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.chandlermacleod.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Mining",
        "Resources",
        "Government",
        "Construction",
        "Healthcare",
        "Transport",
        "Logistics",
        "Manufacturing",
        "Accounting",
        "Banking",
        "HR",
        "IT",
        "Office Support"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Canberra",
      "Newcastle",
      "Coffs Harbour",
      "Gladstone"
    ]
  },
  {
    "name": "Cornerstone Medical Recruitment",
    "description": "Specialist agency for doctors and medical professionals, facilitating lucrative locum placements nationwide.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.cmr.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Medical",
        "General Practice",
        "Hospital Doctors",
        "Allied Health",
        "Nursing"
      ]
    },
    "branches": [
      "Brisbane",
      "Goldcoast"
    ]
  },
  {
    "name": "Creative Recruiters",
    "description": "Melbourne boutique agency specializing in creative, design, and digital sectors with top talent placement.",
    "metaTags": [
      "VIC"
    ],
    "link": "https://www.creativerecruiters.com.au",
    "filterValues": {
      "state": [
        "VIC"
      ],
      "industry": [
        "Creative",
        "Design",
        "Digital",
        "Marketing",
        "Advertising"
      ]
    },
    "branches": [
      "Melbourne"
    ]
  },
  {
    "name": "Drake International",
    "description": "Heritage recruitment firm with talent management solutions, strong in government and industrial sectors.",
    "metaTags": [
      "National"
    ],
    "link": "https://au.drakeintl.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Government",
        "Industrial",
        "Manufacturing",
        "Warehousing",
        "Office Support",
        "Healthcare",
        "Mining",
        "Customer Service"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Canberra",
      "Hobart",
      "Darwin"
    ]
  },
  {
    "name": "Elements Recruitment",
    "description": "Western sydney's trusted recruitment partner connecting talent across accounting, hr, and supply chain roles.",
    "metaTags": [
      "NSW"
    ],
    "link": "https://www.elementsrecruitment.com.au/recruitment-agency-parramatta",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Accounting",
        "HR",
        "Supply Chain"
      ]
    },
    "branches": [
      "Parramatta"
    ]
  },
  {
    "name": "Elias Recruitment",
    "description": "Boutique specialist for lawyers and legal support staff in private practice, in-house, and government teams.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.eliasrecruitment.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Legal",
        "Legal Support"
      ]
    },
    "branches": [
      "Sydney"
    ]
  },
  {
    "name": "Entrée Recruitment",
    "description": "South australia's leading consultancy for corporate and early years education recruitment in adelaide.",
    "metaTags": [
      "SA"
    ],
    "link": "https://www.entree.com.au",
    "filterValues": {
      "state": [
        "SA"
      ],
      "industry": [
        "Admin",
        "HR",
        "Finance",
        "Marketing",
        "Sales",
        "Early Years Education"
      ]
    },
    "branches": [
      "Adelaide"
    ]
  },
  {
    "name": "Fuse Recruitment",
    "description": "Specialist in insurance, wealth management, manufacturing, and infrastructure with graduate programs.",
    "metaTags": [
      "VIC",
      "NSW",
      "QLD",
      "SA"
    ],
    "link": "https://www.fuserecruitment.com",
    "filterValues": {
      "state": [
        "VIC",
        "NSW",
        "QLD",
        "SA"
      ],
      "industry": [
        "Insurance",
        "Wealth Management",
        "Manufacturing",
        "Science",
        "Utilities",
        "Infrastructure",
        "Trades"
      ]
    },
    "branches": [
      "Melbourne",
      "Sydney",
      "Brisbane",
      "Adelaide"
    ]
  },
  {
    "name": "Hays Australia",
    "description": "Market leader in specialist recruitment across 25 specialisms with renowned salary guides and expertise.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.hays.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Architecture",
        "Banking",
        "Construction",
        "Defense",
        "Education",
        "Energy",
        "Engineering",
        "Healthcare",
        "HR",
        "IT",
        "Legal",
        "Manufacturing",
        "Mining",
        "Property",
        "Sales"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Canberra",
      "Hobart",
      "Darwin",
      "Newcastle",
      "Goldcoast",
      "Wollongong"
    ]
  },
  {
    "name": "Healthcare Australia",
    "description": "Nation's leading healthcare agency providing nurses, doctors, and allied health professionals nationwide.",
    "metaTags": [
      "National"
    ],
    "link": "https://healthcareaustralia.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Nursing",
        "Medical",
        "Allied Health",
        "Aged Care",
        "Community Care"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Darwin",
      "Hobart"
    ]
  },
  {
    "name": "Hoban Recruitment",
    "description": "Premier staffing agency since 1965 specializing in government and commercial recruitment with 14 offices.",
    "metaTags": [
      "National"
    ],
    "link": "https://hoban.com.au/federal-government-recruitment/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Government"
      ]
    },
    "branches": [
      "Canberra",
      "Sydney",
      "Melbourne",
      "Brisbane"
    ]
  },
  {
    "name": "Hudson",
    "description": "Talent solutions combining recruitment with psychometric testing for professional and executive roles.",
    "metaTags": [
      "National"
    ],
    "link": "https://au.hudson.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Finance",
        "Tech",
        "Data Analytics",
        "Project Services",
        "Change Management",
        "HR",
        "Sales",
        "Marketing",
        "Government"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Canberra",
      "Adelaide",
      "Perth"
    ]
  },
  {
    "name": "Ivory Group",
    "description": "Award-winning agency for the built environment using behaviours-based recruitment methodology.",
    "metaTags": [
      "NSW",
      "ACT"
    ],
    "link": "https://www.ivorygroup.com.au",
    "filterValues": {
      "state": [
        "NSW",
        "ACT"
      ],
      "industry": [
        "Architecture",
        "Construction",
        "Engineering",
        "Government",
        "Business Support"
      ]
    },
    "branches": [
      "Sydney",
      "Canberra"
    ]
  },
  {
    "name": "Just Digital People",
    "description": "Vibrant, human-centric agency connecting talent with startups and tech companies in the digital age.",
    "metaTags": [
      "QLD",
      "VIC",
      "NSW"
    ],
    "link": "https://www.justdigitalpeople.com.au",
    "filterValues": {
      "state": [
        "QLD",
        "VIC",
        "NSW"
      ],
      "industry": [
        "Digital",
        "Tech",
        "Marketing",
        "IT",
        "Product",
        "Design",
        "Sales"
      ]
    },
    "branches": [
      "Brisbane",
      "Melbourne",
      "Sydney"
    ]
  },
  {
    "name": "Konnecting",
    "description": "Hybrid recruitment and migration agency sourcing skilled international candidates and managing visas.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.konnecting.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Skilled Migration",
        "Engineering",
        "Trades",
        "Healthcare",
        "IT"
      ]
    },
    "branches": [
      "Sydney"
    ]
  },
  {
    "name": "Launch Recruitment",
    "description": "Specialists in technical workforce solutions, it, aviation, and telecommunications recruitment.",
    "metaTags": [
      "NSW",
      "VIC",
      "QLD"
    ],
    "link": "https://www.launchrecruitment.com.au",
    "filterValues": {
      "state": [
        "NSW",
        "VIC",
        "QLD"
      ],
      "industry": [
        "IT",
        "Tele Communication",
        "Aviation",
        "Cooperate Services",
        "Government",
        "Infrastructure"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane"
    ]
  },
  {
    "name": "Manpower Australia",
    "description": "Part of manpowergroup, specializing in industrial and technical staffing for defence and aerospace.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.manpower.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Industrial",
        "Technical",
        "Trades",
        "Engineering",
        "Defense",
        "Aerospace",
        "Government",
        "Business Professionals",
        "Customer Service",
        "IT",
        "Finance",
        "Marketing"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Canberra"
    ]
  },
  {
    "name": "Michael Page",
    "description": "Premium consultancy known for team-based culture placing candidates in mid-to-senior level roles.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.michaelpage.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Finance",
        "Accounting",
        "Banking",
        "Engineering",
        "IT",
        "Legal",
        "Marketing",
        "Sales",
        "Procument",
        "Supply Chain",
        "Property",
        "Construction"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Canberra"
    ]
  },
  {
    "name": "On Line Recruitment",
    "description": "Leading provider of employment services for metropolitan and regional areas with labour hire expertise.",
    "metaTags": [
      "NSW"
    ],
    "link": "https://www.olrecruitment.com.au/about-us/",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "General",
        "Labour"
      ]
    },
    "branches": [
      "Nowra",
      "Wollongong",
      "Batesmans Bay"
    ]
  },
  {
    "name": "Paxus",
    "description": "Australia's leading it recruitment agency with 50+ years in government and banking tech roles.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.paxus.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "Digital",
        "Project Services",
        "Data Analytics",
        "Cyber Security",
        "Government",
        "Banking"
      ]
    },
    "branches": [
      "Melbourne",
      "Sydney",
      "Brisbane",
      "Canberra",
      "Adelaide",
      "Perth"
    ]
  },
  {
    "name": "People2People",
    "description": "Dynamic agency using innovative technology specializing in office support, finance, hr, and legal roles.",
    "metaTags": [
      "NSW",
      "VIC",
      "QLD",
      "WA",
      "SA",
      "NZ"
    ],
    "link": "https://www.people2people.com.au",
    "filterValues": {
      "state": [
        "NSW",
        "VIC",
        "QLD",
        "WA",
        "SA",
        "NZ"
      ],
      "industry": [
        "Admin",
        "HR",
        "Legal",
        "Finance",
        "Sales",
        "Marketing",
        "Supply Chain",
        "Customer Service"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Parramatta"
    ]
  },
  {
    "name": "Programmed Skilled Workforce",
    "description": "Leading provider deploying skilled personnel to mining, energy, and infrastructure sectors nationwide.",
    "metaTags": [
      "National"
    ],
    "link": "https://programmed.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Mining",
        "Resources",
        "Oil & Gas",
        "Manufacturing",
        "Transport",
        "Logistics",
        "Infrastructure",
        "Trades",
        "Industrial"
      ]
    },
    "branches": [
      "Perth",
      "Melbourne",
      "Sydney",
      "Brisbane",
      "Adelaide",
      "Ballarat"
    ]
  },
  {
    "name": "Randstad Australia",
    "description": "Global hr leader with 'human forward' approach for government and digital transformation staffing.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.randstad.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Banking",
        "Construction",
        "Education",
        "Engineering",
        "Government",
        "Healthcare",
        "HR",
        "IT",
        "Legal",
        "Manufacturing",
        "Marketing",
        "Mining",
        "Sales",
        "Transport"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Canberra",
      "Hobart",
      "Darwin"
    ]
  },
  {
    "name": "Robert Walters",
    "description": "Global specialist consultancy for high-calibre professionals, market leaders in legal and finance.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.robertwalters.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Finance",
        "Banking",
        "Legal",
        "Risk Compliance",
        "HR",
        "IT",
        "Marketing",
        "Sales",
        "Supply Chain",
        "Engineering"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Adelaide",
      "Perth",
      "Parramatta",
      "Chatswood"
    ]
  },
  {
    "name": "SC Priority",
    "description": "Labour hire offering excellent solutions with tailored recruitment services and proven results.",
    "metaTags": [
      "NSW"
    ],
    "link": "https://www.scplabourhire.com.au",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Multiple"
      ]
    },
    "branches": [
      "Parramatta"
    ]
  },
  {
    "name": "Scotford Fennessy",
    "description": "Premier perth-based firm with 20+ years experience in mining, resources, and corporate sectors.",
    "metaTags": [
      "WA"
    ],
    "link": "https://www.scotfordfennessy.com.au",
    "filterValues": {
      "state": [
        "WA"
      ],
      "industry": [
        "Mining",
        "Resources",
        "Engineering",
        "Cooperate Services",
        "Accounting",
        "Legal",
        "Construction"
      ]
    },
    "branches": [
      "Perth"
    ]
  },
  {
    "name": "Signature Staff",
    "description": "Trusted regional agency since 1998 specializing in hospitality and administration across far north queensland.",
    "metaTags": [
      "QLD"
    ],
    "link": "https://signaturestaff.com.au",
    "filterValues": {
      "state": [
        "QLD"
      ],
      "industry": [
        "Hospitality",
        "General"
      ]
    },
    "branches": [
      "Cairns",
      "Townsville",
      "Mt Isa",
      "Weipa",
      "Rockhampton",
      "Karumba",
      "Whitsunday",
      "Normanton",
      "Mackay",
      "Bundaberg",
      "Gladstone"
    ]
  },
  {
    "name": "Six Degrees Executive",
    "description": "Specialist in sales, marketing, and retail with deep networks in fmcg and consumer goods industries.",
    "metaTags": [
      "VIC",
      "NSW",
      "QLD"
    ],
    "link": "https://www.sixdegreesexecutive.com.au",
    "filterValues": {
      "state": [
        "VIC",
        "NSW",
        "QLD"
      ],
      "industry": [
        "Sales",
        "Marketing",
        "Retail",
        "Digital",
        "Supply Chain",
        "Procument",
        "Engineering"
      ]
    },
    "branches": [
      "Melbourne",
      "Sydney",
      "Brisbane"
    ]
  },
  {
    "name": "SMAART Recruitment",
    "description": "Award-winning agency since 2005 prioritizing cultural fit and business understanding across australia.",
    "metaTags": [
      "VIC",
      "SA",
      "NSW",
      "QLD"
    ],
    "link": "https://www.smaart.com.au/contact-us",
    "filterValues": {
      "state": [
        "VIC",
        "SA",
        "NSW",
        "QLD"
      ],
      "industry": [
        "General"
      ]
    },
    "branches": [
      "Melbourne",
      "Adelaide",
      "Sydney",
      "Brisbane"
    ]
  },
  {
    "name": "Talent International",
    "description": "Global tech recruitment specialist with contractor care program 'engage' for digital and creative roles.",
    "metaTags": [
      "National"
    ],
    "link": "https://www.talentinternational.com",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "Digital",
        "Creative",
        "Project Services",
        "IT",
        "Data Analytics",
        "Cyber Security"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Canberra"
    ]
  },
  {
    "name": "Techforce Personnel",
    "description": "Niche workforce management for mining, resources, and industrial sectors, key for shutdowns in wa/sa.",
    "metaTags": [
      "WA",
      "SA",
      "QLD",
      "NT",
      "NSW"
    ],
    "link": "https://www.techforce.com.au",
    "filterValues": {
      "state": [
        "WA",
        "SA",
        "QLD",
        "NT",
        "NSW"
      ],
      "industry": [
        "Mining",
        "Oil & Gas",
        "Construction",
        "Industrial",
        "Maintenance",
        "Shutdowns",
        "Facilities Management"
      ]
    },
    "branches": [
      "Perth",
      "Adelaide",
      "Brisbane",
      "Darwin",
      "Newcastle"
    ]
  },
  {
    "name": "The Creative Store",
    "description": "Specialist connecting creative freelancers with advertising agencies focused on 'great jobs, great people'.",
    "metaTags": [
      "National"
    ],
    "link": "https://thecreativestore.com.au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Advertising",
        "Design",
        "Digital",
        "Marketing",
        "Media",
        "Tech"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne"
    ]
  },
  {
    "name": "u&u Recruitment Partners",
    "description": "Partner-led firm where clients deal directly with senior owners for executive and professional roles.",
    "metaTags": [
      "QLD",
      "NSW",
      "VIC"
    ],
    "link": "https://www.uandu.com",
    "filterValues": {
      "state": [
        "QLD",
        "NSW",
        "VIC"
      ],
      "industry": [
        "Accounting",
        "HR",
        "Tech",
        "Sales",
        "Marketing",
        "Legal",
        "Engineering",
        "Executives"
      ]
    },
    "branches": [
      "Brisbane",
      "Sydney",
      "Melbourne",
      "Greater Western Sydney"
    ]
  },
  {
    "name": "Windsor Group",
    "description": "Brisbane profit-for-purpose providing hr solutions, executive search, and recruitment services.",
    "metaTags": [
      "QLD"
    ],
    "link": "https://www.windsor-group.com.au",
    "filterValues": {
      "state": [
        "QLD"
      ],
      "industry": [
        "HR",
        "Multiple"
      ]
    },
    "branches": [
      "Brisbane"
    ]
  },
  {
    "name": "Wise Recruitment",
    "description": "Connects employers with job-ready talent in logistics, admin, events, and finance with fast turnaround.",
    "metaTags": [
      "VIC",
      "NSW"
    ],
    "link": "https://wiserecruitments.com.au",
    "filterValues": {
      "state": [
        "VIC",
        "NSW"
      ],
      "industry": [
        "Multiple"
      ]
    },
    "branches": [
      "Coburg North",
      "Homebush West"
    ]
  },
  {
    "name": "WOW Recruitment",
    "description": "Specialists in marketing, digital, events, and sales tapping into passive high-calibre candidates.",
    "metaTags": [
      "NSW",
      "VIC",
      "QLD"
    ],
    "link": "https://www.wowrecruitment.com.au/about-wow",
    "filterValues": {
      "state": [
        "NSW",
        "VIC",
        "QLD"
      ],
      "industry": [
        "Sales",
        "Customer Service"
      ]
    },
    "branches": [
      "Sydney",
      "Melbourne",
      "Brisbane"
    ]
  }
]

/** Default filters for recruiters (state, industry) */
export const DEFAULT_RECRUITERS_FILTERS: FilterConfig[] = [
  { id: 'state', label: 'Select States...', options: Object.values(STATE_OPTIONS), multiSelect: true },
  { id: 'industry', label: 'Select Industries...', options: ["Accounting","Admin","Admin & Office","Advertising","Aerospace","Aged Care","Agribusiness","Agriculture","Allied Health","Anaesthetics","Analytics","Apprenticeships","Architecture","Aviation","B2B","Banking","Blue Collar","Business Professionals","Business Support","Call Centre","Change Management","Civil","Communications","Community Care","Community Services","Compliance","Construction","Consulting","Consumer","Cooperate Services","Corporate","Creative","Customer Service","Cyber Security","Data","Data Analytics","Defence","Defense","Design","Development","Digital","Disability","Early Childhood","Early Years Education","Education","Energy","Engineering","Events","Executive","Executives","Facilities Management","Facility Management","Finance","Food & Beverage","General","General Practice","Government","HR","Health","Healthcare","Hospital Doctors","Hospitality","Human Resources","IT","Industrial","Infrastructure","Insurance","Labour","Legal","Legal Support","Life Sciences","Logistics","Maintenance","Manufacturing","Marketing","Media","Medical","Mining","Multiple","Not-for-Profit","Nursing","Office Support","Oil & Gas","Operations","Pharmaceuticals","Policy","Procument","Procurement","Product","Professional Services","Project Management","Project Services","Projects","Property","Psychiatry","Radiology","Real Estate","Renewables","Resources","Retail","Risk","Risk Compliance","Sales","Science","Shutdowns","Skilled Migration","Supply Chain","Tech","Technical","Technology","Tele Communication","Telecommunications","Trades","Trades & Services","Traineeships","Transport","Utilities","Warehousing","Wealth Management"], multiSelect: true },
];

import { FilterableCard } from '../models/filterable-card.model';
import { FilterConfig } from '../models/filter-config.model';

const STATE_OPTIONS = {
  NSW: 'NSW',
  NT: 'NT',
  National: 'National',
  QLD: 'QLD',
  SA: 'SA',
  TAS: 'TAS',
  VIC: 'VIC',
  WA: 'WA',
} as const;

const TYPE_OPTIONS = {
  Both: 'Both',
  Event_Platform: 'Event Platform',
  Networking_Platform: 'Networking Platform',
} as const;

/** Default data for events and networking page */
export const DEFAULT_EVENTS_CARDS: FilterableCard[] =
[
  {
    "name": "ACS Events (Australian Computer Society)",
    "description": "Professional development and networking events for it and tech professionals across australia.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.acs.org.au/cpd-education/event-listing.html",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "IT",
        "Tech",
        "Cyber",
        "Data"
      ],
      "type": "Both"
    }
  },
  {
    "name": "AHRI (Events & Networking)",
    "description": "Australian hr institute’s conferences, webinars, and networking forums for hr professionals.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.ahri.com.au/events-and-networking",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "HR",
        "People & Culture"
      ],
      "type": "Both"
    }
  },
  {
    "name": "AICD Events (Australian Institute of Company Directors)",
    "description": "Governance events and networking for directors and aspiring board members across australia.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.aicd.com.au/events.html",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Governance",
        "Leadership",
        "Business"
      ],
      "type": "Both"
    }
  },
  {
    "name": "AIESEC Australia",
    "description": "Largest youth-run org. facilitates international exchange and leadership development. strong campus presence.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://aiesecaustralia.org/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Leadership",
        "Social Impact"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Australian Computer Society",
    "description": "Events allow migrants to earn cpd hours, which are essential for maintaining \"certified professional\" status—a key differentiat...",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.acs.org.au/cpd-education/event-listing.html",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "IT",
        "Data Science",
        "Cyber Security"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Australian Institute of Management (AIM) Events",
    "description": "Leadership and management events (forums, breakfasts, conferences) to build professional networks.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://aimwa.com/events/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Leadership",
        "Management",
        "Business"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Blackbird",
    "description": "Offers protostars micro-grants ($1k) for passion projects and giants mentoring. the sunrise festival is a major networking event.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.blackbird.foundation/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "Innovation",
        "Arts"
      ],
      "type": "Both"
    }
  },
  {
    "name": "CA ANZ (Conferences & Events)",
    "description": "Events, conferences, and learning sessions for accounting and finance professionals in australia.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.charteredaccountantsanz.com/learning-and-events/conferences-and-events",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Finance"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Cairns Student Hub",
    "description": "Physical space offering launch u workshops and multicultural events. connects students to tourism and marine sectors.",
    "metaTags": [
      "QLD",
      "Event Platform",
      "Physical"
    ],
    "link": "https://www.cairnsstudenthub.com.au/",
    "filterValues": {
      "state": [
        "QLD"
      ],
      "industry": [
        "Tourism",
        "Marine",
        "Hospitality"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Cicada Innovations",
    "description": "Australia’s deep tech home. programs like foundations support science/medtech students in commercializing research.",
    "metaTags": [
      "NSW",
      "Both",
      "Physical"
    ],
    "link": "https://www.cicadainnovations.com/",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Tech",
        "Space"
      ],
      "type": "Both"
    }
  },
  {
    "name": "CPA Australia and CA ANZ",
    "description": "Cpa australia hosts events specifically for international students, acknowledging their large presence in the accounting cohort...",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.cpaaustralia.com.au/become-a-cpa/student-network/international-student-career-evening",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Finance"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Earlywork",
    "description": "A slack-based community and academy for early-career roles in tech sales and operations. high engagement and peer support.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://www.earlywork.co/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "Sales",
        "Operations",
        "Startups"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Engineers Australia",
    "description": "Ea runs workshops explaining the \"competency demonstration report (cdr)\" process, which is the paperwork required to prove an o...",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://alayp.hashtag.tickets/events/133618?language=en",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Engineering"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Eventbrite Australia",
    "description": "Major event discovery and ticketing platform for conferences, workshops, and networking events across australia.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.eventbrite.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Business",
        "Tech",
        "Creative"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Eventfinda Australia",
    "description": "Australian event discovery, listing, marketing, and ticketing platform.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.eventfinda.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Arts",
        "Community",
        "Professional"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Facebook Events",
    "description": "Event discovery via facebook for workshops, community meetups, and local professional events in australia.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.facebook.com/events/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "All"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Facebook Groups",
    "description": "Industry- and city-specific groups used for networking, referrals, and sharing events and job leads.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://www.facebook.com/groups/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "All"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Fishburners",
    "description": "Australia’s largest startup community. public pitch nights allow students to showcase ideas and network with founders.",
    "metaTags": [
      "NSW",
      "VIC",
      "Both",
      "Hybrid"
    ],
    "link": "https://fishburners.org/",
    "filterValues": {
      "state": [
        "NSW",
        "VIC"
      ],
      "industry": [
        "Startups",
        "Entrepreneurship"
      ],
      "type": "Both"
    }
  },
  {
    "name": "General Assembly (Events)",
    "description": "Tech and career development classes, info sessions, and events (online + city-based).",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://generalassemb.ly/students/events",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "Data",
        "Design",
        "Marketing",
        "Business"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Gold Coast Student Hub",
    "description": "Hosts kickstart graduate program. a central space for networking, study, and accessing city-wide employment support.",
    "metaTags": [
      "QLD",
      "Networking Platform",
      "Physical"
    ],
    "link": "https://goldcoaststudenthub.com/",
    "filterValues": {
      "state": [
        "QLD"
      ],
      "industry": [
        "Tourism",
        "Healthcare"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "GradConnection",
    "description": "This segmentation saves students from the demoralizing experience of interacting with employers who simply cannot hire them due...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://au.gradconnection.com/meet-the-employers/schedule/international-students/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Business",
        "Engineering",
        "Tech"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Hatch",
    "description": "Matches students with internships and entry-level roles based on \"genuine fit\" and soft skills rather than just gpa. focuses on...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://hatch.team/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Business",
        "Marketing",
        "Tech",
        "Operations"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Humanitix",
    "description": "Ethical ticketing platform used by universities, councils, and charities. ideal for finding social impact, government, and comm...",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://humanitix.com/au",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Education",
        "Government",
        "Social Impact"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "InternMatch",
    "description": "Specialises in placing students into internships (often for course credit/py). uses matching algorithms.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://internmatch.io/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Engineering",
        "IT",
        "Business"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "LinkedIn Events",
    "description": "Professional event listings and rsvps hosted via linkedin; useful for webinars, meetups, and industry networking.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.linkedin.com/events/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "All"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Luma",
    "description": "The \"os\" for the startup ecosystem. hosts calendars for vcs, accelerators, and tech meetups. critical for accessing the \"hidden...",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://luma.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "VC",
        "Creative",
        "Startups"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Meetup (Australia)",
    "description": "Find and join local professional meetups, tech talks, and networking groups across australian cities.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.meetup.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Tech",
        "Startups",
        "Business"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Moshtix",
    "description": "Australian ticketing platform for live events (music/entertainment) and large venue events.",
    "metaTags": [
      "National",
      "Event Platform",
      "Physical"
    ],
    "link": "https://www.moshtix.com.au/v2/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Entertainment",
        "Events"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Oztix",
    "description": "Australian online ticketing partner for live events and venues; also used for conferences and large events.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.oztix.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Events",
        "Entertainment",
        "Community"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Prosple",
    "description": "It provides high-quality \"day in the life\" content and guides, helping migrants understand the culture of specific australian w...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://prosple.com/internships-for-international-students",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "All"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "ReadyGrad",
    "description": "Delivers professional internship programs to ensure work-readiness. focuses on soft skills and culture.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Hybrid"
    ],
    "link": "https://readygrad.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Sidekicker",
    "description": "Casual staffing agency. allows students to build a verified work history (ratings/reviews) in hospitality/events.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://sidekicker.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Hospitality"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Sillicon Beach",
    "description": "Informal grassroots community for tech enthusiasts. monthly meetups are highly accessible to students and newcomers.",
    "metaTags": [
      "National",
      "Both",
      "Physical"
    ],
    "link": "https://www.meetup.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Tech",
        "IT"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Spark Festival",
    "description": "Annual innovation festival in sydney. massive networking opportunity for students to meet the entire tech ecosystem.",
    "metaTags": [
      "NSW",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://sparkfestival.co/",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Tech",
        "Innovation"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Startmate",
    "description": "Offers student fellowship and founder bootcamps. provides high-signal training and direct access to jobs in anz's fastest-growi...",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.startmate.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Startups",
        "Tech"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Startup Grind (Australia Chapters)",
    "description": "Global startup community with australian city chapters hosting regular founder, tech, and networking events.",
    "metaTags": [
      "National",
      "Both",
      "Hybrid"
    ],
    "link": "https://www.startupgrind.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Startups",
        "Tech",
        "Business"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Sticky Tickets",
    "description": "Australian online ticket selling platform for events, workshops, and registrations.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.stickytickets.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Community",
        "Professional"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Stone & Chalk",
    "description": "Focuses on scaling ventures in fintech and cyber. offers scholarships and industry mixers in major capitals.",
    "metaTags": [
      "NSW",
      "VIC",
      "SA",
      "Both",
      "Physical"
    ],
    "link": "https://www.stoneandchalk.com.au/",
    "filterValues": {
      "state": [
        "NSW",
        "VIC",
        "SA"
      ],
      "industry": [
        "IT",
        "Tech"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Student Circus",
    "description": "Exclusively lists jobs from employers willing to sponsor visas (skilled worker routes). saves international students from \"reje...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://studentcircus.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "All"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Study Australia",
    "description": "Students work in cross-disciplinary teams to solve actual business problems for australian and international employers. the pri...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://www.studyaustralia.gov.au/en/work-in-australia/getting-work-and-industry-experience/study-australia-industry-experience-program-saiep",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Business",
        "IT",
        "Marketing",
        "Engineering"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Study Geelong",
    "description": "Runs international student lounge and ambassador programs. leverages \"city of design\" status to connect students with industry.",
    "metaTags": [
      "VIC",
      "Networking Platform",
      "Physical"
    ],
    "link": "https://www.studygeelong.com.au/",
    "filterValues": {
      "state": [
        "VIC"
      ],
      "industry": [
        "Manufacturing",
        "Design",
        "Healthcare"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Study Melbourne",
    "description": "A drop-in service running monday to friday at the hub. it combines job search advice (resumes, cover letters) with legal advice...",
    "metaTags": [
      "VIC",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://studymelbourne.vic.gov.au/events",
    "filterValues": {
      "state": [
        "VIC"
      ],
      "industry": [
        "Business",
        "Law",
        "General",
        "Leadership"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Study NSW Jobs Connect",
    "description": "The program lists over 230 employers across 30 industries, including giants like accor, crown, and merivale. the program is sup...",
    "metaTags": [
      "NSW",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.study.nsw.gov.au/industry/nsw-jobs-connect",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Hospitality",
        "Tech",
        "Engineering",
        "Logistics"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Study NT",
    "description": "Study nt student ambassadors are exceptional students who are passionate about studying, living and working in australia’s nort...",
    "metaTags": [
      "NT",
      "Networking Platform",
      "Physical"
    ],
    "link": "https://studynt.nt.gov.au/student-experience/ambassador-program",
    "filterValues": {
      "state": [
        "NT"
      ],
      "industry": [
        "Government"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Study Queensland / TEQ",
    "description": "The \"study tours and edutourism\" strategy attempts to blend the visitor economy with education, exposing students to regional i...",
    "metaTags": [
      "QLD",
      "Networking Platform",
      "Physical"
    ],
    "link": "https://teq.queensland.com.au/au/en/industry/what-we-do/education-opportunities/international-education",
    "filterValues": {
      "state": [
        "QLD"
      ],
      "industry": [
        "Tourism",
        "Agriculture",
        "Trade",
        "Research"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Study Tasmania",
    "description": "You can access several tailored work-readiness activities on the study tasmania events and resources page throughout the year....",
    "metaTags": [
      "TAS",
      "Event Platform",
      "Physical"
    ],
    "link": "https://www.studytasmania.tas.gov.au/work/employability_support",
    "filterValues": {
      "state": [
        "TAS"
      ],
      "industry": [
        "IT",
        "Tourism",
        "Public Sector"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "StudyAdelaide",
    "description": "Hey physically transport groups of students to regional centers to meet local employers, councils, and industry bodies. this ov...",
    "metaTags": [
      "SA",
      "Networking Platform",
      "Physical"
    ],
    "link": "https://studyadelaide.com/work/employment-connect/students",
    "filterValues": {
      "state": [
        "SA"
      ],
      "industry": [
        "General",
        "Regional Industries"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "StudyPerth Career Support",
    "description": "For engineering and mining migrants, perth is a critical hub. the events hosted in collaboration with the energy club wa offer...",
    "metaTags": [
      "WA",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.studyperth.com.au/careers/career-support/career-events/",
    "filterValues": {
      "state": [
        "WA"
      ],
      "industry": [
        "Hospitality",
        "Mining",
        "Engineering",
        "Tourism"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "SXSW Sydney",
    "description": "Apac edition of sxsw. features student pitch competitions and education & skills tracks. high-level industry access.",
    "metaTags": [
      "NSW",
      "Event Platform",
      "Physical"
    ],
    "link": "https://www.sxswsydney.com/",
    "filterValues": {
      "state": [
        "NSW"
      ],
      "industry": [
        "Tech",
        "Screen",
        "Music",
        "Gaming"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "TasICT",
    "description": "Our networking events bring together people from industry, as well as those who work alongside our industry, and people interes...",
    "metaTags": [
      "TAS",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.tasict.com.au/events/",
    "filterValues": {
      "state": [
        "TAS"
      ],
      "industry": [
        "IT"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "The Big Meet",
    "description": "It tours all major capital cities (sydney, melbourne, brisbane, perth, adelaide). it features a mix of government (adf, state d...",
    "metaTags": [
      "National",
      "Event Platform",
      "Physical"
    ],
    "link": "https://www.thebigmeet.com.au/GradConnection",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "All"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "The Forage",
    "description": "Offers free, open-access job simulations designed by firms like kpmg and commbank. completion signals intent and skills to recr...",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://www.theforage.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Accounting",
        "Law",
        "Consulting",
        "Tech"
      ],
      "type": "Networking Platform"
    }
  },
  {
    "name": "Ticketebo",
    "description": "Australian online ticketing and event registration platform (in-person and online events).",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.ticketebo.com.au/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Community",
        "Professional"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "TryBooking",
    "description": "Australian event ticketing and registration platform used by community and professional organisers.",
    "metaTags": [
      "National",
      "Event Platform",
      "Hybrid"
    ],
    "link": "https://www.trybooking.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "General",
        "Community",
        "Professional"
      ],
      "type": "Event Platform"
    }
  },
  {
    "name": "Venture Cafe",
    "description": "Hosts thursday gatherings in sydney/melbourne. free, high-quality weekly networking for researchers and innovators.",
    "metaTags": [
      "NSW",
      "VIC",
      "Both",
      "Physical"
    ],
    "link": "https://venturecafesydney.org/",
    "filterValues": {
      "state": [
        "NSW",
        "VIC"
      ],
      "industry": [
        "Innovation",
        "Research"
      ],
      "type": "Both"
    }
  },
  {
    "name": "Weploy",
    "description": "On-demand staffing for white-collar/admin roles. good for gaining corporate office experience quickly.",
    "metaTags": [
      "National",
      "Networking Platform",
      "Virtual"
    ],
    "link": "https://www.weployapp.com/",
    "filterValues": {
      "state": [
        "National"
      ],
      "industry": [
        "Admin",
        "Customer Service"
      ],
      "type": "Networking Platform"
    }
  }
]

/** Default filters for events and networking (state, industry, type) */
export const DEFAULT_EVENTS_FILTERS: FilterConfig[] = [
  { id: 'state', label: 'Select States...', options: Object.values(STATE_OPTIONS), multiSelect: true },
  { id: 'industry', label: 'Select Industries...', options: ["Accounting","Admin","Agriculture","All","Arts","Business","Community","Consulting","Creative","Customer Service","Cyber","Cyber Security","Data","Data Science","Design","Education","Engineering","Entertainment","Entrepreneurship","Events","Finance","Gaming","General","Governance","Government","HR","Healthcare","Hospitality","IT","Innovation","Law","Leadership","Logistics","Management","Manufacturing","Marine","Marketing","Mining","Music","Operations","People & Culture","Professional","Public Sector","Regional Industries","Research","Sales","Screen","Social Impact","Space","Startups","Tech","Tourism","Trade","VC"], multiSelect: true },
  { id: 'type', label: 'Select Type...', options: Object.values(TYPE_OPTIONS), multiSelect: false },
];

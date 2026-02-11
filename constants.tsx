
import { VisaCategory, CategoryContent } from './types';

export const CATEGORY_CONTENT: Record<VisaCategory, CategoryContent> = {
  [VisaCategory.TOURIST]: {
    tagline: 'Explore the world without paperwork stress.',
    placeholder: 'Search tourist destination...'
  },
  [VisaCategory.WORK]: {
    tagline: 'Your global career starts here.',
    placeholder: 'Search work visa country...'
  },
  [VisaCategory.STUDY]: {
    tagline: 'Study abroad made effortless.',
    placeholder: 'Search study abroad country...'
  },
  [VisaCategory.PR]: {
    tagline: 'Build your future globally.',
    placeholder: 'Search PR eligible countries...'
  }
};

export const ORIGIN_COUNTRIES = [
  "India",
  "France",
  "USA",
  "Singapore",
  "Spain",
  "China",
  "Canada",
  "Vietnam",
  "Australia",
  "Netherlands",
  "Dubai",
  "UK"
];

export const DESTINATIONS_BY_CATEGORY: Record<VisaCategory, string[]> = {
  [VisaCategory.TOURIST]: [
    "United Arab Emirates",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Switzerland",
    "France",
    "Turkey",
    "Malaysia",
    "Japan",
    "Egypt"
  ],
  [VisaCategory.WORK]: [
    "United States",
    "United Kingdom",
    "Canada",
    "United Arab Emirates",
    "Oman",
    "Singapore"
  ],
  [VisaCategory.STUDY]: [
    "Canada",
    "United Kingdom",
    "United States",
    "Australia",
    "Ireland"
  ],
  [VisaCategory.PR]: [
    "Canada",
    "Australia",
    "United Kingdom",
    "New Zealand"
  ]
};

export const TRUSTED_BRANDS = [
  'TATA', 'Reliance', 'Infosys', 'Wipro', 'HCLTech', 
  'Zomato', 'Paytm', 'Swiggy', 'Flipkart', 'Ola', 'Mahindra'
];

export const TRUST_FEATURES = [
  { text: 'Zero Cost', icon: '✔' },
  { text: 'Zero Spam', icon: '✔' },
  { text: 'End-to-End Assistance', icon: '✔' },
  { text: 'Global Network', icon: '✔' }
];

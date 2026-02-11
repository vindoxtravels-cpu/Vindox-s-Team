
export enum VisaCategory {
  TOURIST = 'Tourist',
  WORK = 'Work',
  STUDY = 'Study',
  PR = 'PR'
}

export interface CategoryContent {
  tagline: string;
  placeholder: string;
}

export interface TrustedBrand {
  name: string;
}

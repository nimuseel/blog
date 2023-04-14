export interface CareerProject {
  name: string;
  period: string;
  description: string;
  details: string[];
}

export interface ICareerItem {
  companyName: string;
  companySlug: string;
  companyDescription: string;
  position: string;
  period: string;
  projects: CareerProject[];
}

export interface Experiences {
  experiences?: CareerProject[];
}

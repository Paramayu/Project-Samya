export type ViewType = 'home' | 'team' | 'initiative-1' | 'initiative-2' | 'initiative-3';

export interface InitiativeSection {
  heading: string;
  paragraphs: string[];
}

export interface Initiative {
  id: number;
  title: string;
  summary: string;
  details: string[];
  sections?: InitiativeSection[];
  image: string;
  category: string;
  highlights: string[];
}

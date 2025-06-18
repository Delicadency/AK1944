export interface Biogram {
  id: number;
  slug: string;
  title: string;
  pseudonym: string[];
  birthDate: string;
  deathDate: string;
  burialPlace: string;
  description: Array<string | string[]>;
  descriptionSecond?: Array<string | string[]>;
  imageUrl: string;
}

export interface BiogramHistoryProps {
  biogram: Biogram;
}

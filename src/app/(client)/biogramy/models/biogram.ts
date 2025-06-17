export interface Biogram {
  id: number;
  slug: string;
  title: string;
  pseudonym: string[];
  birthDate: string;
  deathDate: string;
  burialPlace: string;
  description: Array<string | string[]>; // opis może być tablicą stringów lub tablicą tablic stringów
  descriptionSecond?: Array<string | string[]>; // opcjonalne, ten sam typ co description
  imageUrl: string;
}

export interface BiogramHistoryProps {
  biogram: Biogram;
}

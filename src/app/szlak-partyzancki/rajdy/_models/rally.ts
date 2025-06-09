export type Rally = {
  id?: number;
  slug?: string;
  title?: string;
  date?: string;
  description?: string;
  imageUrl?: string;
  relation?: string[];
  images?: SliderImage[];
};

export interface SliderImage {
  src: string;
  alt: string;
}

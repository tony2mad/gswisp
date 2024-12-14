// Define image paths as constants
export const IMAGES = {
  FLYER_1: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
  FLYER_2: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80'
} as const;

export const FLYERS_DATA = [
  {
    id: 1,
    src: IMAGES.FLYER_1,
    alt: 'GSWISP Optički Internet - Informacije',
  },
  {
    id: 2,
    src: IMAGES.FLYER_2,
    alt: 'GSWISP Optički Internet - Ponuda',
  },
] as const;
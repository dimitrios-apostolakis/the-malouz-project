export type AlienArchetype = 'radients' | 'orients' | 'naviens' | 'certiens' | 'lviens';

export type Category = 'all' | 'tshirts' | 'ceramics' | 'bags' | 'drawings';

export interface ProductItem {
  id: string;
  title: string;
  code: string;
  slug: string;
  category: 'tshirts' | 'ceramics' | 'bags' | 'drawings';
  archetype: AlienArchetype;
  edition: string;
  materials: string[];
  dimensions: string;
  description: string;
  artistNote: string;
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  imageUrl?: string;
  instagramUrl?: string;
}

export interface ArchetypeDetail {
  id: AlienArchetype;
  name: string;
  title: string;
  eroticGeometry: string;
  anatomicalConcept: string;
  philosophicalNote: string;
  tactileManifestation: string;
  tshirtFocus: string;
  accentColor: string;
}

export interface InquiryItem {
  product: ProductItem;
  quantity: number;
  selectedSize?: string;
}

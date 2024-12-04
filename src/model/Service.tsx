export interface ServiceContents {
  id: number;
  name: string;
  description: string;
  contents: string;
  categoryId: number;
  categoryName: string;
}

export interface ServiceCategory {
  services: ServiceContents[];
  thumbnail: string;
  taxonomy: string;
  count: number;
  name: string;
  slug: string;
  id: number;
}

export interface ServiceContents {
  name: string;
  description: string;
  contents: string;
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
